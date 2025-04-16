# Kaluza-Klein Spin-2 Spectrum in Warped Compactification
This project studies Kaluza-Klein (KK) graviton mass spectra for a 5-dimensional gravitational theory compactified on a circle with a **warped metric**:
\[
ds^2_{5d} = e^{2A(x)} \left( ds^2_{4d} + dx^2 \right)
\]
where:
- \( x \in [0, 2\pi] \) is the internal coordinate of the circle,
- \( ds^2_{4d} \) is a 4-dimensional metric satisfying \( \mathrm{Ricci}[g_4] = 3g_4 \) (i.e., 4d de Sitter),
- The **warp factor** is \( A(x) = \sin(x) + 4\cos(x) \).
## Problem
We consider **spin-2 Kaluza-Klein (KK) modes**, corresponding to transverse-traceless metric fluctuations along the 4d spacetime. Their squared masses are determined by the eigenvalues of the following operator:
\[
- Y''(x) - 4 A'(x) Y'(x) = m^2 e^{2A(x)} Y(x)
\]
with periodic boundary conditions \( Y(x+2\pi) = Y(x) \).
In this project, we **numerically compute all KK eigenvalues \( m^2 \) below 14**, counting all degenerate modes (including any zero modes).
## Code
The repository provides scripts to compute the number of KK spin-2 eigenvalues (with degeneracy) below a numerical threshold (e.g., 14):
- **Python**: Uses NumPy and SciPy to discretize and solve the generalized eigenvalue problem.
- **JavaScript**: Uses Math.js to set up and diagonalize the relevant matrix numerically for moderate grid sizes.
These scripts reproduce the KK spectrum for the given warped compactification setup, returning the full count of spin-2 masses below the specified threshold.
---