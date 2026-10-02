---
permalink: /pinn/
title: "Interior–Magnetosphere Coupling with PINNs"
author_profile: true
redirect_from: 
  - /pinn.html
papers:
  - /publication/2023-pinns-magnetospheres
---

<div class="topic topic--wrap">
<figure class="topic-figure topic-figure--float topic-figure--plot topic-figure--blend">
<video class="topic-figure__media" src="/files/topics/pinn-coupling.mp4" poster="/files/topics/pinn-coupling-poster.webp" autoplay loop muted playsinline preload="metadata" aria-label="Animation comparing the crust evolving with a force-free and a vacuum magnetosphere"></video>
</figure>
<p class="topic__lede">
A neutron star’s interior and its magnetosphere shape each other, but simulating both together is expensive, so the magnetosphere is usually simplified. We trained a physics-informed neural network that computes the magnetosphere almost instantly, for a whole family of surface magnetic fields, without retraining. Coupled to a simulation of the star’s interior, it lets the two evolve together at every time step. This made it possible, for the first time in long simulations, to use more realistic force-free magnetospheres, which turn out to change how the field inside the star evolves, and opens the way to fully coupled 3D models.
</p>
</div>

{% include topic-papers.html %}
