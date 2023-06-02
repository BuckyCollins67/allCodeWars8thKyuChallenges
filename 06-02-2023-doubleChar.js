// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// P - Parameters
// We will be given a string of characters.

// R - Returns
// We will be expected to return a new string of double each of those characters

// E - Examples
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// P - Psuedocode
// 1.) make a for loop 
// 2.) for every charachter in a given string print that character twice.
// 3.) return that new string
// 4.) 


// function doubleChar(str) {
//     let newString = ""
//     for (let i = 0; i < str.length; i++) {
//         newString += str[i]
//         newString += str[i]  //Theres a better way to do this, I'm sure.
        
//     }
//     return newString
//   }

  function doubleChar(str) {
    let newString = ""
    for (let i = 0; i < str.length; i++) {
        newString += str[i] + str[i]  //There we go.   
    }
    return newString
  }
  