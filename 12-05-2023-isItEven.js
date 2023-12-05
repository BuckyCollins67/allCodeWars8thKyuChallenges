// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a number, positive negative ints and floats

// R - Returns
// We will be expected to return a boolean.

// E - Examples
//  0  =>  true
//  0.5  =>  false
//  1 => false

// P - Psuedocode
// 1.) if it's 0 return true
// 2.) else modulo the number, if that's zero, return true
// 3.) else return false
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function testEven(n) {
    if (n == 0){
        return true
    } else if (n % 2 == 0){
        return true
    } else {
        return false
    }
}