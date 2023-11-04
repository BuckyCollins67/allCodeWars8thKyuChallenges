// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an array of ints

// R - Returns
// We will be expected to return an interger.  It should be the sum of the squares of the array.

// E - Examples
//  [1,2,3,]  =>  9
//    =>

// P - Psuedocode
// 1.) iterate through the array.  square the number and add it to the accumulator
// 2.) return the accumulated sum
// 3.) 
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function squareSum(numbers){
    return numbers.reduce((a,c)=>{
        return a + (c**2)
    }, 0)
}