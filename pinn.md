---
permalink: /pinn/
title: "Interior–Magnetosphere Coupling with PINNs"
author_profile: true
redirect_from: 
  - /pinn.html
---

<!-- IMAGE floated to the right -->
<img src="/files/NN.png"
     alt="PINN"
     style="float:right; width:55%; margin-left:20px; border-radius:6px;">

<p style="text-align: justify;">
In this work, we develop a physics-informed neural network (PINN) capable of solving the Grad–Shafranov equation for neutron-star magnetospheres under general boundary conditions and source terms. Unlike traditional PINNs, which are trained for a single fixed boundary value problem, our network takes as input not only the spatial coordinates but also a compact set of coefficients describing the surface magnetic-field multipoles and the toroidal current profile. This enables the same trained network to generate accurate solutions for a wide family of boundary conditions without retraining. Although this generalized training increases the dimensionality and computational cost, the resulting model can evaluate new magnetospheric configurations orders of magnitude faster than classical elliptic solvers.
</p>

<!-- Clears the float so the lower text doesn't wrap around -->
<div style="clear: both;"></div>


<p style="text-align: justify;">
The PINN approach accurately reproduces the analytical vacuum (current-free) solutions of the Grad–Shafranov equation and performs robustly in the more challenging force-free (FF) case, where no closed-form solutions exist. By embedding the differential equation directly into the loss function and using automatic differentiation to compute derivatives, the network learns both the poloidal flux function and its spatial derivatives with comparable precision. This is especially advantageous compared with finite-difference methods, where derivative accuracy is limited by grid resolution. A detailed hyperparameter study shows that model width (neurons per layer) is the most important factor for accuracy, while overly deep networks tend to overfit.
</p>


<p style="text-align: justify;">
The main astrophysical innovation of this work is the coupling of the PINN-computed magnetospheric solution to a two-dimensional magneto-thermal evolution code for the neutron-star crust. Traditionally, enforcing external boundary conditions requires solving a global elliptic problem at every timestep—significantly slowing long-term simulations. With our trained PINN, the magnetosphere can be computed essentially instantaneously at each timestep, supplying magnetic-field values in the exterior ghost cells while the crust evolves. This allows magneto-thermal simulations to explore both vacuum and force-free magnetospheric boundary conditions with minimal computational overhead.
</p>

  <!-- IMAGE floated to the right -->
  <img src="/files/coupling.mov"
       alt="Coupling"
       style="float:right; width:90%; margin-left:20px; border-radius:6px;">


  <p style="text-align: justify;">
Finally, we show that force-free boundary conditions—made practical for the first time in long simulations thanks to the PINN—lead to qualitatively different internal magnetic-field evolution compared to the vacuum case. FF magnetospheres permit currents to flow across the stellar surface and produce stronger, more asymmetric toroidal structures near the surface, which in turn reshape the poloidal field distribution. These differences will have clear observational implications, such as modified thermal-surface patterns. The results demonstrate that PINNs can successfully replace expensive exterior solvers and open the way toward future three-dimensional magnetosphere–interior coupling studies.
  </p>

  <!-- Clears the float so the lower text doesn't wrap around -->
  <div style="clear: both;"></div>


