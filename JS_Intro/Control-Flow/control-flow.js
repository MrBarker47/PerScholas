// Part 1: Growing Pains
const PI = 3.14;
const radius = 5;
const area = PI * radius * radius;
let growth  = area;
let newArea = 0.8;
if(growth > 80) {
    console.log("Pruned") 
} else if(growth > 50) {
    console.log("Monitored");
} else if (growth < 30) {
    console.log("Planted");
} else {
    console.log("");
}



//Part 2: Thinking Bigger
let plants = 100;
let weeks = plants ** 10;
let garden = weeks * newArea;
function sqaure() {
    return Math.sqrt(plants / PI);
}

console.log(sqaure());

//Part 3: Errors in Judgement 
