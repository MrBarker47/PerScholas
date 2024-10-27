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

let check = n1 > n4;
console.log(check);

let math = n1 - n2;
console.log(math);

let math2 = math * n3;
console.log(math2);

let newMath = math2 / n4;
console.log(newMath);

const isOver25 = (!n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);
console.log(isOver25);


const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);

const isValid = !isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid);

// Part 2 
// let trip = 1500;

// let miles = 55 / 30;

// let miles2 = 60/28;

// let newMiles = 75 / 23;
