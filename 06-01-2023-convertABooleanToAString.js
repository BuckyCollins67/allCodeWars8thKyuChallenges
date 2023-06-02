// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// PREP Method

// Parameters

// We will be given a boolean value (true or false)  Only valid inputs, so no NaNs or empty values.

// Returns

// We will be expected to return the string to the cooresponding boolean value "true" or "false".

// Examples

// (true, "true")
// (false, "false")

// Psuedocode

// 1.  If the boolean is true, return "true"
// 2.  Else, return "false"

function booleanToString(b){
    if (b === true) {
        return "true"
    } else {
        return "false"
        
    }
  }

  //it works, but there's a method that makes this easier.

//   function booleanToString(b){
//     return b.toString();
//   }