// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a string of random numbers.  

// R - Returns
// We will be expected to return fake binary.  If a number in the string is below 5, we change it to 0, if a number is 5 or above, we change it to a 1

// E - Examples
//   '45385593107843568', '01011110001100111' 
//   '509321967506747', '101000111101101'

// P - Psuedocode
// 1.) iterate through the string (turn to array first)
// 2.) If the number is below 5 add a 0 to a new array, otherwise, add a 1 to the new array
// 3.) convert the array to a string
// 4.) return that new string.

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function fakeBin(x){
    const newArr= [...x]
    console.log(newArr)
    const transformedArr = newArr.map(function change(num) {
        return(parseInt(num)<5) ? '0' : '1'
    }) 
    
    return (transformedArr.join(''))
    
}