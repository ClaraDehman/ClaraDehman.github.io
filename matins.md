---
permalink: /matins/
title: "The MATINS Code"
author_profile: true
redirect_from: 
  - /matins.html
papers:
  - /publication/2022-matins-formalism
  - /publication/2024-matins-thermal-lightcurves
  - /publication/2023-magnetic-topology-evolution
  - /publication/2025-chiral-magnetar-fields
  - /publication/2025_Living_Review
---

<div class="topic topic--wrap">
<figure class="topic-figure topic-figure--bare topic-figure--float">
<video class="topic-figure__media" src="/files/topics/matins-field-lines.mp4" poster="/files/topics/matins-field-lines-poster.webp" width="480" height="480" autoplay loop muted playsinline preload="metadata" aria-label="Animation of 3D magnetic field lines evolving in a MATINS simulation"></video>
</figure>
<p class="topic__lede">
During my PhD I led the development of MATINS, an open-access code that follows the coupled magnetic and thermal evolution of isolated neutron stars in full 3D. Earlier studies were mostly axisymmetric (2D) or treated the coupling between heat and magnetic field only schematically. MATINS evolves the crustal magnetic field under Ohmic dissipation and the Hall drift, together with a 3D cooling model, realistic equations of state from the <a href="https://compose.obspm.fr" target="_blank" rel="noopener">CompOSE database</a> and up-to-date microphysics, on a cubed-sphere grid that avoids the singularities of spherical coordinates. It follows a star self-consistently for a million years and predicts what we actually observe: thermal X-ray emission, surface magnetic fields and rotation. It is also the engine behind population-synthesis studies and models of magnetar outbursts driven by crustal stress. MATINS has since been extended to include the chiral magnetic effect (<a href="https://doi.org/10.1103/rhv5-nd4v" target="_blank" rel="noopener">Dehman &amp; Pons 2025</a>).
</p>
<p class="topic-links">
<a href="https://github.com/ice-csic-astroexotic/MATINS" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> MATINS on GitHub</a>
<a href="https://ice-csic-astroexotic.github.io/code/matins/" target="_blank" rel="noopener"><i class="fas fa-globe" aria-hidden="true"></i> MATINS project page</a>
</p>
</div>

{% include topic-papers.html %}
