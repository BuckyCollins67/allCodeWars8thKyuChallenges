// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given three intergers.  One representing the hours since midnight, one representing the minutes, and one representing the seconds.

// R - Returns
// We will be expected to return a single interger, the number of milliseconds since midnight.

// E - Examples
//    h = 0
//    m = 1
//    s = 1
//    result = 61000

// P - Psuedocode
// 1.) calculate from hours to minutes
// 2.) minutes to seconds
// 3.) seconds to milliseconds
// 4.) return milliseconds

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function past(h, m, s){
    let ms = 0
    ms += h*3600000
    ms += m*60000
    ms += s*1000
    return ms
  }