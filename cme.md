---
permalink: /cme/
title: "Magnetar Formation, Helicity, and the Chiral Magnetic Effect"
author_profile: true
redirect_from: 
  - /cme.html
---

 <p style="text-align: justify;">
  Recent 3D magneto-hydrodynamic (MHD) simulations of core-collapse supernovae (CCSNe) have advanced our understanding of stellar explosions and the formation of hot proto-neutron star (PNS) remnants. Nevertheless, NS magnetic field configurations at birth remain poorly constrained, and the origin of magnetars’ strong large-scale dipoles—critical for slow spin-down—is still debated. Among the proposed formation mechanisms for magnetars, a leading scenario invokes turbulent dynamos during the PNS phase, which predominantly generate small-scale, toroidally dominated fields, yielding magnetar-level energy but only a weak large-scale dipole. I implemented an inferred birth-field configuration in MATINS for its first fully 3D magneto-thermal application (Dehman et al. 2023, MNRAS 523, 32). Simulations show that such an initial field, motivated by the magneto-rotational instability (MRI) (Reboul et al. (2021)), can explain CCOs as only ~5% of the magnetic energy resides in the dipole. Subsequent long-term NS evolution modeling (Igoshev et al. (2025)) using a Taylor–Spruit dynamo (Barrère et al. (2025)) reproduced low-field magnetar properties, confirming that birth conditions alone cannot account for observed magnetars dipoles. These results suggest that an additional mechanism is required to transfer energy from small-scale fields to the large-scale dipole over longer timescales.
  </p>

<section>
  <h2>Magnetic helicity and Chiral magnetic effect (CME) at the origin of magnetars field: </h2> 

<!-- IMAGE floated to the right -->
<img src="/files/inverse_cascade.png"
     alt="inverse-cascade"
     style="float:right; width:65%; margin-left:20px; border-radius:6px;">
     
   <p style="text-align: justify;">
     Magnetic helicity, which quantifies the linkage and twist of field lines and couples poloidal and toroidal components, plays a central role in transferring magnetic energy across scales and may underlie the formation of large-scale dipolar fields (Frisch el al (1975), Brandenburg (2020)). Despite its importance, helicity has been largely overlooked in studies of NS magnetic field evolution. In collaboration with Prof. Brandenburg (Nordita, Sweden), I studied magnetic helicity under the non-linear Hall effect in the NS crust using the Pencil Code and MATINS (Dehman & Brandenburg, A&A 694, A39, 2025). While helicity drives an inverse cascade, transferring energy from small to large scales, the crust’s limited thickness (~1 km) constrains strong dipole formation. Nonetheless, this process is crucial, as small-scale structures—otherwise prone to rapid Ohmic decay—reorganize into larger-scale fields that persist over long timescales.
  </p>

<!-- Clears the float so the lower text doesn't wrap around -->
<div style="clear: both;"></div>

<!-- IMAGE floated to the right -->
<img src="/files/CME_dipolegrowth.png"
     alt="CME"
     style="float:right; width:50%; margin-left:20px; border-radius:6px;">


  <p style="text-align: justify;">
In stars whose magnetic fields carry helicity, total helicity—defined as the sum of magnetic and
fermionic contributions—is conserved once the chiral anomaly is accounted for. Building on this, I extended MATINS to model magnetar field evolution under total helicity conservation for the first time (Dehman & Pons, PRR 7, 033231, 2025). We showed that as field lines relax (losing magnetic helicity), a small chiral asymmetry of 10⁻¹¹ MeV arises in the electron chemical potential, driving an additional current along magnetic field lines (CME), even when accounting for rapid spin-flip damping from electromagnetic scattering that flips electron handedness due to their finite mass (Grabowska et al. (2015), Sigl & Leite  (2016), Dvornikov (2016)). This mechanism is particularly relevant for magnetars, whose mean fields exceed the QED critical field (BQED  = 4.41×1013 G). It operates over decades, relaxing small-scale entanglements and redistributing energy to large scales. Through the CME, turbulent small-scale fields predicted by PNS models (with an initial dipole ~10¹² G) can reorganize into a strong dipole (~10¹⁴ G) within decades, consistent with the youngest observed magnetars (e.g., Swift J1818.0–1607, 200 yr (Esposito et al. 2020)), providing a physical explanation for their origin. 
  </p>

  <!-- Clears the float so the lower text doesn't wrap around -->
<div style="clear: both;"></div>
</section>

