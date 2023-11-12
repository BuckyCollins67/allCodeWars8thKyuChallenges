// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.


// minimum age <= your age <= maximum age

// Task
// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

// ##Examples:

// age = 27   =>   20-40
// age = 5    =>   4-5
// age = 17   =>   15-20


// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given an interger between 0 and 100.  

// R - Returns
// We will be expected to return a string (whole number) based on the input.  If the number is less than 14, we apply a set of rules, otherwise we use a different set of rules.

// E - Examples
// age = 27   =>   20-40
// age = 5    =>   4-5
// age = 17   =>   15-20

// P - Psuedocode
// 1.) determine if input is less than 14,
// 2.) calculate min and max, floored for no decimal.
// 3.) return string of range
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function datingRange(age){
    let minAge = 0;
    let maxAge = 0;
    if (age <= 14) {
        minAge = (age - 0.10 * age)
        maxAge = (age + 0.10 * age)
        return (`${Math.floor(minAge)}-${Math.floor(maxAge)}`)
    }else{
        minAge = ((age/2)+7)
        maxAge = ((age-7)*2)
        return (`${Math.floor(minAge)}-${Math.floor(maxAge)}`)
    }
  }