// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a string.  It may start with an uppercase or lowercase letter.

// R - Returns
// We will be expected to return a string.  If the string begins with the letter R we return "name plays banjo." Otherwise we return "name does not play banjo"

// E - Examples
// ("Adam"), "Adam does not play banjo")
//  ("Ringo"), "Ringo plays banjo")

// P - Psuedocode
// 1.) test the first letter of the string.  If it's an r or R, return ${name} plays banjo.  else return ${name} does not play banjo
// 2.) 
// 3.) 
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function areYouPlayingBanjo(name) {
    let testName = name.toLowerCase()
    if (testName.charAt(0) == "r") {
        return `${name} plays banjo`
    }else{
        return `${name} does not play banjo`
    }
}