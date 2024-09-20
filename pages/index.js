            // Data Manipulation with js


//Create variable declarations using both let and const.
let FName = "Fitsum";
const LName = "Adugna";

console.log(FName);
console.groupEnd(LName);

//Apply different types of data literals

//  1.  String
let FN = "Fitsum";
console.log(FN) 
  
// 2. Number
let num = 2 + 3;
console.log(num)

//  3. Boolean
 let A= 10;
let B = 5;
console.log(A > B);  // true
console.log(A < B);  // false
   
// 4. Array
let fruit = ["apple", 'banana', 2, 4, "cherry"]

//5. object 
let person = { firstName: "fitsum", lastName:"Adugna"}

//6. null
//represents the intentional absence of a value.
       
//7. undefined
//represents a variable that has been declared but not assigned a value.


//Use arithmetic operators to manipulate data.
 
let addition = 2 + 3; //5
let subtraction = 6 - 4;// 2
let divition = 9 / 3;// 3
let muliplication = 3 * 2; //6
let modulus = 6 % 2;   //0


//Use comparison operators to compare data.
let x = 10;
let y = 5;
console.log(x > y);  // true
console.log(x < y);  // false
console.log(x >= y); // true
console.log(x <= y); // false
console.log(x === y); // false
console.log(x !== y); // true


//Perform string concatenations.
let myFullName = FName + LName;
console.log(myFullName)  //Fitsum Adugna
let concaNum = "56" + "5"; // 565

//Implement escape sequences in strings for special characters.
const str = "This string contains a \"double quote\" ,\\backslash\\ \n and Newline.";
console.log(str); 
// Output: This string contains a "double quote", \backslash\
// and NewLine

//Use template literals for string interpolation and multi-line strings.

  // String interpolation
const nameOfSchool = "Perscholas";
const greeting = `Hello, ${nameOfSchool}!`;
console.log(greeting); // Output: Hello, Perscholas!

// Multi-line strings
const multiLine = `
This is a 
multi-line
string.
`;

console.log(multiLine);


 // The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


//Check if all numbers are divisible by 5
const isNumDiv = n1 / 5 || n2 / 5 || n3 / 5 || n4 / 5;

//Check if the first number is larger than the last.
const firNumLargThanLast = n1 > n4;
console.log(` the first number is larger than the last:${firNumLargThanLast}`);


//Subtract the first number from the second number.
const subFirsFromSec = n1 - n2;
console.log(
  `Subtract the first number from the second number is: ${subFirsFromSec}`
);

//Multiply the result by the third number.
const multyThirNum = 50 * n3;
console.log(`Multiply the result by the third number is:${multyThirNum}`);

//Find the remainder of dividing the result by the fourth number.
const FindRemainder = 50 % 4;
console.log(
  `Finding the remainder of dividing the result by the fourth number is: ${FindRemainder}`
);


// let use 55mile/h  = 1500mil/30mile/g= 50g

const numgallonFor55mil = 1500 / 30; // 50gallon needs for total tripe 
const numgallonFor60mil = 1500 / 28; // 53.57gallon needs for total tripe
const numgallonFor75mil = 1500 / 23; // 65.22gallon needs for total tripe

//Will your budget be enough to cover the fuel expense?
const budgetFor55 = numgallonFor55mil * 3; // $150 
const budgetFor60 = numgallonFor60mil * 3; // $161
const budgetFor75 = numgallonFor75mil * 3;//  $195

//How long will the trip take, in hours?
const travelTime55 = 1500 / 55; // 27.3hrs
const travelTime60 = 1500 / 60; // 25hrs
const travelTime70 = 1500 / 75; // 20hrs

//Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
 // I will choese the second one or make sense for me.

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
//const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
//const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
//const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);