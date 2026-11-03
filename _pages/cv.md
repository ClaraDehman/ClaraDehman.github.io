---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="cv">
<div class="cv__main">

<p class="archive__lede">My academic path in brief. The full CV is available as a PDF.</p>

<p class="cv__download">
  <a class="btn-cv" href="{{ base_path }}/files/ClaraDehman_CV.pdf" target="_blank" rel="noopener"><i class="fas fa-file-arrow-down" aria-hidden="true"></i> Download CV (PDF)</a>
  <span class="cv__updated" id="cv-updated" style="display:none"></span>
</p>

<script>
  // Shows the date the CV PDF was last changed, read from the repository's history on GitHub.
  fetch('https://api.github.com/repos/{{ site.repository }}/commits?path=files/ClaraDehman_CV.pdf&per_page=1')
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (c) {
      var d = new Date(c[0].commit.author.date);
      var el = document.getElementById('cv-updated');
      el.textContent = 'Last updated ' + d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      el.style.display = '';
    })
    .catch(function () {});
</script>

<ol class="cv-timeline">
  <li class="cv-timeline__item cv-timeline__item--next">
    <span class="cv-timeline__when">2026 – present</span>
    <span class="cv-timeline__what"><strong>Research Associate</strong>, Anton Pannekoek Institute, University of Amsterdam</span>
    <span class="cv-timeline__note">Modelling fast radio bursts</span>
  </li>
  <li class="cv-timeline__item">
    <span class="cv-timeline__when">2024 – 2026</span>
    <span class="cv-timeline__what"><strong>Juan de la Cierva Fellow</strong>, University of Alicante, Spain</span>
    <span class="cv-timeline__note">Chiral anomalies in magnetars</span>
  </li>
  <li class="cv-timeline__item">
    <span class="cv-timeline__when">2023</span>
    <span class="cv-timeline__what"><strong>Visiting PhD Fellow</strong>, Nordita, Stockholm</span>
  </li>
  <li class="cv-timeline__item">
    <span class="cv-timeline__when">2019 – 2023</span>
    <span class="cv-timeline__what"><strong>PhD in Physics</strong>, Autonomous University of Barcelona &amp; ICE-CSIC</span>
    <span class="cv-timeline__note">Cum Laude, International Mention; developed the 3D code MATINS</span>
  </li>
  <li class="cv-timeline__item">
    <span class="cv-timeline__when">2017 – 2019</span>
    <span class="cv-timeline__what"><strong>Erasmus Mundus Joint MSc</strong> in Theoretical Nuclear Physics</span>
    <span class="cv-timeline__note">Padua, Caen and the Spanish university consortium</span>
  </li>
  <li class="cv-timeline__item">
    <span class="cv-timeline__when">2017</span>
    <span class="cv-timeline__what"><strong>BSc in Physics</strong>, Lebanese University</span>
    <span class="cv-timeline__note">Ranked 1st in the Physics Department</span>
  </li>
</ol>

<h2 class="cv__h">Recognition</h2>
<ul class="cv-awards">
  <li><span class="hl">2026</span> <span>UAInvestiga Award for the Greatest Scientific Impact in Sciences <span class="cv-awards__note">(conferred without application)</span></span></li>
  <li><span class="hl">2026</span> <span>Seal of Excellence, European Commission</span></li>
  <li><span class="hl">2024</span> <span>IEEC Best Doctoral Thesis Award</span></li>
  <li><span class="hl">2024</span> <span>Special Mention, SEA Thesis Award</span></li>
  <li><span class="hl">2017</span> <span>Erasmus Mundus Scholarship, Joint Master in Nuclear Physics <span class="cv-awards__note">(top 20% of international applicants)</span></span></li>
</ul>

</div>

</div>
