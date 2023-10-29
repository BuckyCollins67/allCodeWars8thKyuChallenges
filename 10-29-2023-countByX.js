// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given intergers.  

// R - Returns
// We will be expected to return an array of intergers starting at our given interger, and counting in multiples up to x times (our second variable. )

// E - Examples
//    countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//    countBy(2,5) === [2,4,6,8,10]

// P - Psuedocode
// 1.) create a new empty array
// 2.) create a loop.  put in the first number, and while we're lower than the iteration number, push onto that array that number plus itself.
// 3.) return that array
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x*i)
    }
    return z;
  }