// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34


// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an interger.  It may be positive or negative.  A value of zero should not be negative (nor technically positive)

// R - Returns
// We will be expected to return the opposite of the interger.  If positive, it becomes negative, and vice versa.

// E - Examples
//   1: -1
//  14: -14
// -34: 34

// P - Psuedocode
// 1.) Take our input.
// 2.) Multiply our input by negative one.
// 3.) return that new number
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

// function opposite(number) {
//     return number*(-1)
//   }

  function opposite(number) {
    return(-number);
  }