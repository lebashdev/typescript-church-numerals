// -------------------------------------------------------------------------------
// This is for reference only.
// The functions below are implemented in the value space
// as examples of how both algorithms work.
// -------------------------------------------------------------------------------

// Implementing the "add" function.

// Iterative form.
const addIterative = (a: number, b: number): number =>
{
    while (a > 0)
    {
        b += 1;
        a -= 1;
    }

    return b;
}

// Recursive form.
const add = (a: number, b: number): number =>
{
    return a == 0
    ? b
    : add(a - 1, b + 1);
}

console.log(add(0, 1));
console.log(add(2, 0));
console.log(add(2, 3));

// Implementing the "multiply" function.

const multiply = (a: number, b: number) =>
{
    const inner = (acc: number, value: number, index: number): number =>
    {
        return index == 0
        ? acc
        : inner(acc + value, value, index - 1);
    };

    return inner(0, a, b);
}

console.log(multiply(1, 3));
console.log(multiply(2, 5));
console.log(multiply(5, 1));