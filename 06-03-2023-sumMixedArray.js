// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an array of numbers as intergers and numbers as strings

// R - Returns
// We will be expected to return the sum of the numbers

// E - Examples
// ([9, 3, '7', '3']), 22)
// (['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)

// P - Psuedocode
// 1.) Iterate through the array
// 2.) If the number is a string, convert to an interger and add to total
// 3.) if the number is a interger, add to total
// 4.) return the total

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function sumMix(x){
    let total = 0
    for (let i = 0; i < x.length; i++) {
        total += Number(x[i])
        
    }
    return total
}

//Pretty proud of this one.  didn't need to look much up.  It works, it's readable.