export const DisableModules = true;

// -------------------------------------------------------------------------------
// Church encoding
// -------------------------------------------------------------------------------

// 0 = x
// 1 = successor(x)
// 2 = successor(successor(x))
// 3 = successor(successor(successor(x)))
// ...

// -------------------------------------------------------------------------------
// Implement addition and multiplication with pure types.
// -------------------------------------------------------------------------------

// Represent numbers.
type Zero = ""
type NaN = never
type Num = string

// "Successor" function.
// Produces a unique structure for each natural number
// by "wrapping" the input.
type Succ<T> = T extends Num ? `${T}+1` : NaN

type One = Succ<Zero> // The static analyzer sees this as "+1".
type Three = Succ<Succ<Succ<Zero>>> // "+1+1+1"
type Four = Succ<Three> // "+1+1+1+1"

// "Predecessor" function.
// "Unwraps" the nested structure/number.
type Pred<A> = A extends Succ<infer U> ? U : NaN;

type Two = Pred<Three> // "+1+1"

// Implement "add".
// Use a recursive algorithm.
// "A" is decremented with every iteration.
// "B" is incremented with every iteration.
// The recursive loop exits when A reaches Zero.
type Add<A, B> =
    A extends Zero
    ? B // Output
    : Add<Pred<A>, Succ<B>> // Add(A - 1, B + 1)

// add(2,3) // First iteration
// add(1,4) // First parameter is decremented, and second is incremented.
// add(0,5) => 5

type OnePlusOne = Add<One, One>
type Six = Add<Two, Four>
type Ten = Add<Six, Four>

// Implement "multiply".

// There are two parts to this.
// First, a type which acts as a function
// that recursively adds a Value to an accumulator
// and decrements an Index until it reaches Zero.
type MutiplyInternal<Accumulator, Value, Index> =
    Index extends Zero
    ? Accumulator // Output
    : MutiplyInternal<Add<Accumulator, Value>, Value, Pred<Index>> // Mult(Acc + Value, Value, Index - 1)

// This second function simplifies the signature and
// hides the Accumulator parameter by partially applying it.
type Multiply<A, B> = MutiplyInternal<Zero, A, B>

// This is what MutiplyInternal does under the hood:
// * mult(0, 2, 3) // First iteration
// * mult(2, 2, 2)
// * mult(4, 2, 1)
// * mult(6, 2, 0) => 6

type Eight = Multiply<Two, Four>
type Twelve = Multiply<Three, Four>