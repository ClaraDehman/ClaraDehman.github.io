---
permalink: /
title: "Research Interests"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .blue { color: #1f77b4; }
  .highlight { color: #1f77b4; font-weight: bold; }
</style>

<!--**<span class="blue">Welcome to my homepage!</span>**-->

<p style="text-align: justify;">
I am a theoretical and computational astrophysicist, currently a Juan de la Cierva Fellow in Spain. My work focuses on neutron stars—compact stellar remnants so dense that a teaspoon of their matter would outweigh a mountain. We observe these objects across the electromagnetic spectrum, but understanding their behavior requires modeling how magnetic fields, heat, and ultra-dense matter interact in their interiors. To probe these extreme environments, we use large-scale, high-performance numerical simulations.
</p>

<section>

  <h2>The MATINS Code</h2>

  <div style="display: flex; align-items: flex-start; gap: 30px;">

  <div style="flex: 1; min-width: 300px;">
      <p style="text-align: justify;">
        Over the past decades, 2D axisymmetric studies provided foundational insights into cooling and
        magneto-thermal coupling in strongly magnetized NSs, but they could not capture non-axisymmetric
        effects. Early 3D efforts addressed either magnetic evolution alone or included thermal coupling only
        schematically. My PhD work bridged this gap by leading the development of
        <a href="https://ice-csic-astroexotic.github.io/MATINS" target="_blank">MATINS Homepage</a>
        (Dehman+2023; Ascenzi+2024) — an open-access 3D framework for fully coupled magneto-thermal
        evolution in isolated neutron star crusts.
        <br>
        <a href="https://github.com/ice-csic-astroexotic/MATINS" target="_blank">MATINS on GitHub</a>
      </p>
    </div>

  <div style="flex: 1; min-width: 300px; text-align: center;">
      <img src="files/legend_field_lines.gif"
           alt="Magnetic field evolution"
           style="width:100%; border-radius:6px;">
    </div>

  </div>

  <p style="text-align: justify;">
    From a physical standpoint, MATINS solves the induction equation in the crust, incorporating Ohmic dissipation and Hall drift—key mechanisms driving magnetic energy cascades and surface heating in magnetars. This equation is coupled to a 3D cooling model that tracks local crustal temperature evolution, treats the core as a single thermal cell, and uses an envelope model as a boundary condition to provide the stellar surface temperature. MATINS also computes the Tolman–Oppenheimer–Volkoff structure, enabling the consistent use of various tabulated cold-matter equations of state (EOS; CompOSE database) and stellar masses throughout the crust and core. Temperature-dependent microphysical properties in both regions are obtained from the IOFFE repository, ensuring precise coupling of thermal and magnetic evolution. Computationally, MATINS employs a finite-volume scheme discretized on a cubed–sphere (CS; Fig. 2) coordinate system, representing the stellar surface with six interconnected patches and circumventing the coordinate singularities inherent to spherical grids in finite-volume schemes. 
  </p>

  <p style="text-align: justify;">
MATINS facilitates self-consistent evolution over one million years and accurately models key observables of isolated NSs, including X-ray thermal emission, surface magnetic fields, and rotational properties. MATINS further enables pulsar population synthesis—connecting magnetic evolution to spin and birth characteristics—and simulates magnetar bursts driven by crustal stress release, capturing flaring rates as functions of age and magnetic geometry.
  </p>

</section>

<!-- <p>
  Currently, as a <span class="blue">Juan de la Cierva Fellow</span>—awarded through a competitive national research program—I investigate how <span class="blue">magnetic helicity</span> and <span class="blue">chiral anomalies</span> influence neutron star magnetic field evolution. Building on this, I show how a newborn neutron star can reorganize a tangle of small magnetic knots into the strong, ordered dipole seen in magnetars—without any external power source. For years, ideas focused on the first moments after collapse struggled to build a large dipole and mostly produced short-lived, small-scale turbulence. My results explain how that turbulence later self-organizes. The key is <span class="blue">magnetic helicity</span>—the twist and linkage of field lines. A subtle quantum link between particle spin and magnetic fields (a <span class="blue">chiral</span> effect) lets the field use its own helicity as a catalyst to rearrange itself. Modern particle-physics calculations show that any initial particle imbalance decays quickly, and I include that damping. Even so, a tiny residual is enough when a neutron star has what earlier stages don’t: time. Over roughly 50–100 years, my 3D simulations show the field coalescing into a large-scale dipole of a few ×10¹⁴ gauss—matching observations of mature magnetars. This closes a long-standing gap between early “dynamo” ideas and observed magnetars, and highlights the often overlooked role of helicity: small twists, patiently guided over decades, can build the giant magnetic structures that power these stars.
</p> -->


