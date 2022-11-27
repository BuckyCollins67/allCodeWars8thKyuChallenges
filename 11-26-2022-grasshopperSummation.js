// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a positive interger greater than 0.  No negatives, no nulls, no decimals.

// R - Returns
// We will be expected to return an interger that is the sum of every number up to the given number from 1.

// E - Examples
// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// P - Psuedocode
// 1.) make a for loop, where it adds every number, up to the given number
// 2.) return the sum
// 3.) 
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

var summation = function (num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
        console.log(sum)
        
    }
  return sum
  }

  