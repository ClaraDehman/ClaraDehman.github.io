---
permalink: /
title: "Research Highlights"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .custom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* smaller min width */
    gap: 20px; /* slightly smaller gap */
    margin-top: 25px;
  }

  .custom-card {
    border-radius: 8px;
    overflow: hidden;
    background: #f7f7f7;
    text-align: center;
    transition: transform 0.2s ease;
    padding: 5px; /* reduced padding */
    max-height: 300px;
  }

  .custom-card:hover {
    transform: scale(1.03);
  }

  /* Square images */
  .custom-card img {
    width: 100%;
    aspect-ratio: 1 / 1; /* forces square */
    object-fit: contain;  /* show entire image */
    background: #ffffff;  /* optional: neutral background */
    padding: 2px;        /* reduced padding inside image */
    border-radius: 6px;
  }

  .custom-caption {
    padding-top: 10px;
    font-size: 1.1em;
  }
</style>


<p style="text-align: justify;">
I am a theoretical and computational astrophysicist, currently a Juan de la Cierva Fellow in Spain. My work focuses on neutron stars—compact stellar remnants so dense that a teaspoon of their matter would outweigh a mountain. We observe these objects across the electromagnetic spectrum, but understanding their behavior requires modeling how magnetic fields, heat, and ultra-dense matter interact in their interiors. To probe these extreme environments, we use large-scale, high-performance numerical simulations.
</p>

<div style="clear: both;"></div>


<div class="custom-grid">

  <div class="custom-card">
    <a href="/matins/">
      <img src="/files/MATINSlogo.svg" alt="MATINS project">
      <div class="custom-caption">
        <strong>MATINS Code</strong>
      </div>
    </a>
  </div>

  <div class="custom-card">
    <a href="/cme/">
      <img src="/files/InverseCascade.jpg" alt="Helicity CME">
      <div class="custom-caption">
        <strong>Magnetic Helicity & Chiral Magnetic Effect</strong>
      </div>
    </a>
  </div>

</div>

<div style="clear: both;"></div>

<div class="custom-grid">

  <div class="custom-card">
    <a href="/contrainteos/">
      <img src="/files/constraint_eos.png" alt="Dense Matter EOS">
      <div class="custom-caption">
        <strong>Constraint on Dense Matter Equation of State</strong>
      </div>
    </a>
  </div>

  <div class="custom-card">
    <a href="/frb/">
      <img src="/files/frb.png" alt="Magnetic Stresses & FRBs">
      <div class="custom-caption">
        <strong>Magnetic Stresses & Fast Radio Bursts</strong>
      </div>
    </a>
  </div>

</div>

<div style="clear: both;"></div>

 <div class="custom-grid">

  <div class="custom-card">
    <a href="/pinn/">
      <img src="/files/pinn.png" alt="PINNs">
      <div class="custom-caption">
        <strong>Interior–Magnetosphere Coupling with PINNs</strong>
      </div>
    </a>
  </div>

  <div class="custom-card">
    <a href="/finite_temp_eos/">
      <img src="/files/eos_finiteT.png" alt="Finite-temperature EOS">
      <div class="custom-caption">
        <strong>Finite-Temperature Nuclear EOS</strong>
      </div>
    </a>
  </div>

</div>

