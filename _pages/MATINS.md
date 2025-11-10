<section>

  <h2>The MATINS Code</h2>

  <p style="text-align: justify;">
    Over the past decades, 2D axisymmetric studies provided foundational insights into cooling and
    magneto-thermal coupling in strongly magnetized neutron stars, but they could not capture non-axisymmetric
    effects. Early 3D efforts addressed either magnetic evolution alone or included thermal coupling only
    schematically. My PhD work bridged this gap by leading the development of
    <a href="https://ice-csic-astroexotic.github.io/code/matins/" target="_blank">MATINS Homepage</a>
    (Dehman+2023a,b; Ascenzi+2024) — an open-access 3D framework for fully coupled magneto-thermal
    evolution in isolated neutron star crusts:
    <a href="https://github.com/ice-csic-astroexotic/MATINS" target="_blank">MATINS on GitHub</a>.
  </p>

  <!-- IMAGE floated to the right -->
  <img src="files/legend_field_lines.gif"
       alt="Magnetic field evolution"
       style="float:right; width:40%; margin-left:20px; border-radius:6px;">

  <p style="text-align: justify;">
    From a physical standpoint, MATINS solves the induction equation in the crust, incorporating Ohmic
    dissipation and Hall drift—key mechanisms driving magnetic energy cascades and surface heating
    in magnetars. This equation is coupled to a 3D cooling model that tracks local crustal temperature
    evolution, treats the core as a single thermal cell, and uses an envelope model as a boundary condition
    to provide the stellar surface temperature. MATINS also computes the Tolman–Oppenheimer–Volkoff
    structure, enabling the consistent use of various tabulated cold-matter equations of state from the
    <a href="https://compose.obspm.fr" target="_blank">CompOSE database</a> and stellar masses throughout
    the crust and core. Temperature-dependent microphysical properties in both regions are obtained from the
    <a href="https://www.ioffe.ru/astro/conduct/" target="_blank">IOFFE repository</a>, ensuring precise
    coupling of thermal and magnetic evolution. Computationally, MATINS employs a finite-volume scheme
    discretized on a cubed–sphere coordinate system, representing the stellar surface with six interconnected
    patches and circumventing the coordinate singularities inherent to spherical grids.
  </p>

  <!-- Clears the float so the lower text doesn't wrap around -->
  <div style="clear: both;"></div>

  <p style="text-align: justify;">
    MATINS facilitates self-consistent evolution over one million years and accurately models key observables
    of isolated neutron stars, including X-ray thermal emission, surface magnetic fields, and rotational
    properties. MATINS further enables pulsar population synthesis—connecting magnetic evolution to spin and
    birth characteristics—and simulates magnetar bursts driven by crustal stress release, capturing flaring
    rates as functions of age and magnetic geometry.
  </p>

</section>
