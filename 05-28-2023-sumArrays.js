// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

//  Prep Method
//  P - Params
//  I'll be given an array of numbers.  The array can be of any size.  The array can be empty.
//  
//  R - Returns
//  I'll be expected to return the sum of the array.  It can be negative.  It can me a non-int.  If the array is empty, I can return 0.
//  
//  E - Examples
//  // Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

//  P - Pseudocode
//  functionName(theArray){
//     if theArray === [] {
//         return 0;
//     } else {
//         let i = 0; if i is less than the array length then ... {
//             add up all items in theArray
//             return the sum
//         }
//     }
// }
//  My solution doesn't work. :(
// function sum (numbers) {
//     if (numbers === []) {
//         return 0;
//     } else {
//         for (let i = 0; i < numbers.length; i++) {
//             const element = numbers[i];
//             if (i === 0) i < numbers.length; {
//                 let x = numbers[i];
//                 total += x;
//                 return total;
//             }
//         }
//         return total;
        
//     }
// }

function sum(numbers) {
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    
    return total;
  }