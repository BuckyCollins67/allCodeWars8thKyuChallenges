// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// P - Parameters
// We will be given an array.  It will not be empty.

// R - Returns
// We will be expected to return the smallest int in the array.

// E - Examples
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// P - Psuedocode
// 1.) loop through the array
// 2.) Store the current iteration in a variable
// 3.) If the number is less than the stored number, then store that new number.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return(Math.min(...args))
    }
  }