// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// PREP Method 

// P - Params 
// We will be given a list (looks like an array) of whole numbers.  An array of nothing is also possible.


// R - Returns 
// We are expected to give the average of the list.  


// E - Examples
// ([1,1,1]), 1);
// ([1,2,3]), 2);
// ([1,2,3,4]), 2.5)


// P - Pseudocode
// if the list is empty, return 0
// else
// iterate through the list, adding items to a variable
// divide that variable by the array.length
// return that number.

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    } else {
        let total = 0;
        let i = 0
        while (i<array.length) {
            total += array[i]
            i++
        }
        return total/array.length
    }
    
  }

  //My solution works!

  // favored solution from the website looks like this:
//   function find_average(array) {
//     if (array.length === 0) {
//     return 0;
//     }
//     var result = 0;
//     for (i=0; i<array.length; i++) {  this right here is what I was struggling with.  can't do this with a while loop.
//       result +=array[i];
//     }
//     return result/array.length;
//   }
