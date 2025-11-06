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
  <p style="text-align: justify;">
    Over the past decades, 2D axisymmetric studies provided foundational insights into cooling and magneto-thermal coupling in strongly magnetized neutron stars (NSs), but they could not capture non-axisymmetric effects. Early 3D efforts addressed either magnetic evolution alone or included thermal coupling only schematically. My PhD work bridged this gap by leading the development of <strong>MATINS</strong> (Dehman+2023; Ascenzi+2024)—an open-access 3D framework for fully coupled <strong>MA</strong>gneto-<strong>T</strong>hermal evolution in <strong>IN</strong>olated neutron star <strong>S</strong> crusts:
    <a href="https://github.com/ice-csic-astroexotic/MATINS" target="_blank">https://github.com/ice-csic-astroexotic/MATINS</a>.
  </p>

  <p style="text-align: justify;">
    MATINS solves the induction equation in the crust, incorporating Ohmic dissipation and Hall drift—key mechanisms driving magnetic energy cascades and magnetar surface heating. This is coupled to a 3D cooling model tracking local crustal temperature, treating the core as a single thermal reservoir and using an envelope model to set the surface temperature.
  </p>

  <p style="text-align: justify;">
    The code computes stellar structure using the Tolman–Oppenheimer–Volkoff equations and supports tabulated equations of state from the CompOSE database. Temperature-dependent microphysical inputs are drawn from the IOFFE database, ensuring consistent thermal and magnetic evolution.
  </p>

  <p style="text-align: justify;">
    Computationally, MATINS employs a finite-volume scheme on a cubed-sphere coordinate system, avoiding singularities in spherical grids. It enables self-consistent evolution over Myr timescales and models key observables of isolated NSs, including X-ray emission, surface magnetic fields, and rotational properties. MATINS also supports pulsar population synthesis and magnetar burst simulations driven by crustal stress accumulation.
  </p>
</section>

<p>
  Currently, as a <span class="blue">Juan de la Cierva Fellow</span>—awarded through a competitive national research program—I investigate how <span class="blue">magnetic helicity</span> and <span class="blue">chiral anomalies</span> influence neutron star magnetic field evolution. Building on this, I show how a newborn neutron star can reorganize a tangle of small magnetic knots into the strong, ordered dipole seen in magnetars—without any external power source. For years, ideas focused on the first moments after collapse struggled to build a large dipole and mostly produced short-lived, small-scale turbulence. My results explain how that turbulence later self-organizes. The key is <span class="blue">magnetic helicity</span>—the twist and linkage of field lines. A subtle quantum link between particle spin and magnetic fields (a <span class="blue">chiral</span> effect) lets the field use its own helicity as a catalyst to rearrange itself. Modern particle-physics calculations show that any initial particle imbalance decays quickly, and I include that damping. Even so, a tiny residual is enough when a neutron star has what earlier stages don’t: time. Over roughly 50–100 years, my 3D simulations show the field coalescing into a large-scale dipole of a few ×10¹⁴ gauss—matching observations of mature magnetars. This closes a long-standing gap between early “dynamo” ideas and observed magnetars, and highlights the often overlooked role of helicity: small twists, patiently guided over decades, can build the giant magnetic structures that power these stars.
</p>


<!--I led the development of MATINS, focusing on the *magnetic field modeling component* and the implementation of its distinctive *cubed-sphere grid*, enabling detailed magneto-thermal simulations of neutron star crusts over million-year timescales. -->

<!-- Furthermore, my recent research explores the pivotal role of **magnetic helicity** in neutron star magnetic field evolution—a concept not widely explored in *neutron star physics* literature. Specifically, I study the *inverse cascade phenomenon* triggered by an initial helical field in magnetars. In a groundbreaking approach, I applied the concept of the **chiral magnetic effect** to neutron star magnetic field modeling, revealing how magnetic helicity alone can generate chiral asymmetry. This mechanism reshapes initially turbulent, small-scale magnetic structures into coherent, large-scale fields (\~10¹⁴ G), typical of observed magnetars. Thus, this innovative model addresses a longstanding open question in astrophysical research. -->

<!-- Beyond astrophysics, my expertise extends into **nuclear theory**. Collaborating with colleagues, I developed a **finite-temperature equation of state** critical for studying late-stage proto-neutron stars and the aftermath of binary neutron star mergers. -->



<!-- Below you’ll find highlights of my **selected research projects**—each reflecting the curiosity and rigor that drive my scientific journey. -->
<!-- ----->

<!--### MATINS-->

<!-- ----->
