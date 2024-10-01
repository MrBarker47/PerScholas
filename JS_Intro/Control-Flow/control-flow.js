//Part 1
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const growth = area;
const meters = 0.8;


if(growth > 80) {
    console.log("Pruned");
} else if(growth > 50) {
    console.log("Monitored");
} else if(growth < 50) {
    console.log("Planted");
}


//Part 2
let plants = 100;
let weeks = 10;
let garden_Expand = meters * weeks;
let n = weeks / PI;
let s = Math.sqrt(n);
console.log(s);


//Part 3
try {
    if(growth > 80) {
        console.log("Pruned");
    } else if(growth > 50) {
        console.log("Monitored");
    } else if(growth < 50) {
        console.log("Planted");
    }
}
catch(error) {
    console.log(error);
}

