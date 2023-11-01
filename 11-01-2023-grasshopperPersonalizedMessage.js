// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given two strings.  A name string and an owner string.

// R - Returns
// We will be expected to return a string.  Either "hello boss" if the name string and owner string are the same, or "hello guest."

// E - Examples
//    john, john => 'Hello boss'
//    sally, john=> 'Hello guest'

// P - Psuedocode
// 1.) if statment.  It names are the same, return 'hello boss'
// 2.) else return 'hello guest'
// 3.) 
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

function greet (name, owner) {
    if (name == owner) {
        return('Hello boss')
    } else {
        return('Hello guest')
    }
  }