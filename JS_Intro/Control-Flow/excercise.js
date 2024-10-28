// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;


//Part 1
//Checking if the number are divisible 5
let divisible = (n1 % 5 === 0) || (n2 % 5 === 0) || (n3 % 5 === 0) ||  (n4 % 5 === 0) >= 5;
console.log(divisible);

//Check if the first number is larger than the last 
let check = n1 > n4;
console.log(check);

//Subtract the first number from the second number 
let math = n1 - n2;
console.log(math);

//Multiply the result by the third number 
let math2 = math * n3;
console.log(math2);

//Find the remainder of dividing the result by the fourth number 
let newMath = math2 / n4;
console.log(newMath);

//Change the way that isOver25
const isOver25 = (!n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);
console.log(isOver25);


const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);

const isValid = !isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid);

// Part 2 
let trip = 1500;
// Miles
let miles  = 55;
let miles2 = 60;
let miles3 = 75;
//Per Gallon
let gallon = 30;
let gallon2 = 28;
let gallon3 = 23;

//Budget
let fuel = 175;

let averageCost = 3;


//How many gallons of fuel will you need for the entire trip?
// let miles = 55 / 30;
let question1 = miles / gallon;
console.log(question1);

//Will your budget be enough to cover the fuel expense? 
// let miles2 = 60/28;


//How long will the trip take, in hours?
// let newMiles = 75 / 23;
