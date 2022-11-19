// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// PREP Method

// P Parameters
// We will be given an array of booleans.  There may also be value's such as null and undefined.

// R Return
// We are required to return the number of "true" in the array.  false, null, undefined, or other values, will not count tword this number.

// E Examples
// // [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// P Pseudocode
// Take in the array
// Iterate through the array
// For every true, increase value counter by one
// Return the value Counter

