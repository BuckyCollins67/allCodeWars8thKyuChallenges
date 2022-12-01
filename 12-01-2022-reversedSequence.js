// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an interger.

// R - Returns
// We will be expected to return an array of intergers from our given interger, down to 0.

// E - Examples
//   n=5 => [5,4,3,2,1]
//   n=3 => [3,2,1]

// P - Psuedocode
// 1.) make a while loop, 
// 2.) for every loop, push number on to array
// 3.) return the array
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

const reverseSeq = n => {
    let newArr = []
    while (n > 0) {
        newArr.push(n)
        n--        
    }
    return newArr;
}