//function practice 1
// function computerArea(width, height) {
//         const area = width * height;
//         return `The area of a rectangle with a ${width} of and a ${height} of is sqaure units`;
// }


// console.log(computerArea(2,5));

// function practice 2
// let planetHasWater = function(plant) {
//     if(planetHasWater = "Earth") {
//         return true;
//     } else if (planetHasWater = "Mars") {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(planetHasWater());

// function getDevObject(name, lastName,  ...skills) {
//     return {
//         devName: name,
//         jobSkills: skills
//     };
// }
// getDevObject('J', 'Barker', 'HTML', 'CSS', 'JS', 'JQuery');

// const name = "Jamaal";

// (function functionType() {
//     console.log(name);
// })();

let myVar = 20;

function passBy(myVar) {
    myVar = myVar * 10;
    console.log(myVar);
}

passBy(myVar);