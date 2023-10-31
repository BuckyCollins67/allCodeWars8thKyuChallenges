// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given two inputs.  One a string with a person's name.  The other is an int with that persons age.  We are expected to create a constructor.

// R - Returns
// We will be expected to return a string of "names" age is "14"

// E - Examples
//  Person(john, 34)  =>  johns age is 34
//    =>

// P - Psuedocode
// 1.) Create the class that takes in a name and an age
// 2.) return a string using a template literal that uses the objects information.
// 3.) 
// 4.) 

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    
    get info(){
      console.log(`${this.name}s age is ${this.age}`)
      return (`${this.name}s age is ${this.age}`)
    }
  }