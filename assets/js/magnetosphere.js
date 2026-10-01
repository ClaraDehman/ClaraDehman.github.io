/*
 * Homepage hero: a rotating, oblique neutron star with a twisted dipole
 * magnetosphere (field lines r = L R sin^2 theta, plus a small toroidal twist).
 * Pure canvas, no dependencies. Static frame when reduced motion is requested.
 */
(function () {
  var canvas = document.getElementById('magnetosphere');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var W = 0, H = 0, dpr = 1, cx = 0, cy = 0, R = 0;
  var alpha = 0.6;              // magnetic inclination (rad) w.r.t. spin axis
  var twist = 0.55;             // toroidal twist of field lines (rad across a loop)
  var shells = [1.6, 2.3, 3.4, 5.2, 8.5, 14];
  var azimuths = 9;
  var view = 0.32, viewTarget = 0.32;   // viewing tilt (rad), nudged by the pointer
  var phase = 1.1;
  var running = true, last = 0;

  function resize() {
    var rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width; H = rect.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var narrow = W < 900;
    cx = narrow ? W * 0.72 : W * 0.7;
    cy = narrow ? H * 0.3 : H * 0.5;
    R = Math.max(14, Math.min(W, H) * (narrow ? 0.075 : 0.085));
    if (reduce) draw();
  }

  // rotate vector v about the y (spin) axis by angle a
  function rotY(v, a) {
    var c = Math.cos(a), s = Math.sin(a);
    return [c * v[0] + s * v[2], v[1], -s * v[0] + c * v[2]];
  }
  // tilt toward the viewer about the x axis
  function rotX(v, a) {
    var c = Math.cos(a), s = Math.sin(a);
    return [v[0], c * v[1] - s * v[2], s * v[1] + c * v[2]];
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // magnetic frame: m tilted by alpha from spin axis (y), spinning with phase
    var m = rotX(rotY([Math.sin(alpha), Math.cos(alpha), 0], phase), view);
    var e1 = rotX(rotY([Math.cos(alpha), -Math.sin(alpha), 0], phase), view);
    var e2 = [m[1] * e1[2] - m[2] * e1[1], m[2] * e1[0] - m[0] * e1[2], m[0] * e1[1] - m[1] * e1[0]];

    // soft halo
    var halo = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 7);
    halo.addColorStop(0, 'rgba(140,200,255,0.20)');
    halo.addColorStop(1, 'rgba(140,200,255,0)');
    ctx.fillStyle = halo; ctx.fillRect(0, 0, W, H);

    ctx.lineCap = 'round';
    var back = [], front = [];
    for (var s = 0; s < shells.length; s++) {
      var L = shells[s];
      var th0 = Math.asin(Math.sqrt(1 / L));
      for (var k = 0; k < azimuths; k++) {
        var phi0 = (k / azimuths) * Math.PI * 2 + s * 0.35;
        var pts = [];
        var n = 90;
        for (var i = 0; i <= n; i++) {
          var th = th0 + (Math.PI - 2 * th0) * (i / n);
          var r = L * Math.pow(Math.sin(th), 2);
          var phi = phi0 + twist * (th - Math.PI / 2);
          var a = r * Math.sin(th) * Math.cos(phi), b = r * Math.sin(th) * Math.sin(phi), c = r * Math.cos(th);
          var x = a * e1[0] + b * e2[0] + c * m[0];
          var y = a * e1[1] + b * e2[1] + c * m[1];
          var z = a * e1[2] + b * e2[2] + c * m[2];
          var p = 1 / (1 - z * 0.02);          // gentle perspective
          pts.push([cx + x * R * p, cy - y * R * p, z, Math.hypot(x, y)]);
        }
        // split into visible segments (hide the part behind the star)
        var seg = [];
        for (var j = 0; j < pts.length; j++) {
          var q = pts[j];
          var hidden = q[2] < 0 && q[3] < 1;
          if (!hidden) seg.push(q);
          if ((hidden || j === pts.length - 1) && seg.length > 1) {
            var zm = 0; for (var t = 0; t < seg.length; t++) zm += seg[t][2];
            zm /= seg.length;
            (zm < 0 ? back : front).push({ pts: seg, z: zm, L: L });
            seg = [];
          } else if (hidden) seg = [];
        }
      }
    }

    function stroke(list) {
      for (var i = 0; i < list.length; i++) {
        var ln = list[i];
        var depth = Math.max(0, Math.min(1, 0.5 + ln.z / (ln.L * 1.6)));
        ctx.strokeStyle = 'rgba(140,200,255,' + (0.12 + 0.5 * depth) * (ln.L > 9 ? 0.6 : 1) + ')';
        ctx.lineWidth = 0.6 + 1.1 * depth;
        ctx.beginPath();
        ctx.moveTo(ln.pts[0][0], ln.pts[0][1]);
        for (var j = 1; j < ln.pts.length; j++) ctx.lineTo(ln.pts[j][0], ln.pts[j][1]);
        ctx.stroke();
      }
    }
    stroke(back);

    // the star
    var g = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
    g.addColorStop(0, '#f2f7ff'); g.addColorStop(0.55, '#b4cbea'); g.addColorStop(1, '#3a5687');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();

    // polar hotspots where field lines thread the surface
    [1, -1].forEach(function (sgn) {
      var px = m[0] * sgn, py = m[1] * sgn, pz = m[2] * sgn;
      if (pz <= 0) return;
      var hx = cx + px * R, hy = cy - py * R;
      var hs = ctx.createRadialGradient(hx, hy, 0, hx, hy, R * 0.55);
      hs.addColorStop(0, 'rgba(255,214,120,' + (0.35 + 0.65 * pz) + ')');
      hs.addColorStop(0.4, 'rgba(244,183,64,' + 0.5 * pz + ')');
      hs.addColorStop(1, 'rgba(244,183,64,0)');
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
      ctx.fillStyle = hs; ctx.fillRect(hx - R, hy - R, R * 2, R * 2); ctx.restore();
    });

    stroke(front);
  }

  function frame(t) {
    if (!running) return;
    var dt = last ? Math.min(64, t - last) : 16; last = t;
    phase += dt * 0.00018;
    view += (viewTarget - view) * 0.04;
    draw();
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  if (reduce) { draw(); return; }

  canvas.parentElement.addEventListener('pointermove', function (e) {
    var rect = canvas.getBoundingClientRect();
    viewTarget = 0.32 + ((e.clientY - rect.top) / rect.height - 0.5) * 0.5;
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var vis = entries[0].isIntersecting;
      if (vis && !running) { running = true; last = 0; requestAnimationFrame(frame); }
      running = vis;
    }).observe(canvas);
  }
  requestAnimationFrame(frame);
})();
