// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given intergers in an array, both positive and negative possible.

// R - Returns
// We will be expected to return the opposite interger, in an array.

// E - Examples
//   invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//   invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//   invert([]) == [] 
//    

// P - Psuedocode
// 1.) for every item in the array, multiply it by -1
// 2.) return new array
// 3.) 
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function invert(array) {
    return array.map((interger) => {
        return interger * -1
    })
 }