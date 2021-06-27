# Overview

In TypeScript there are two spaces: the value space in which runtime computation and evaluation is performed, and the type space, where compile-time analysis is done.
The code space contains the code we ship, while the type space only exists in our IDE.

The goal of the code in type-space.ts is to replicate the logic from value-space.ts, but only with types.  That code can only be evaluated at compile-time, or when the static analyzer performs type inference.  It has no purpose other than demonstrating that TypeScript's type system can represent simple computations.
