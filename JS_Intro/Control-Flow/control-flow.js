//Part 1: Growing Pains
const PI = 3.1415;
const radius = 78.5;
const area = PI * radius * radius;
let growth  = area;
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
let week = 10;
function newArea(PI, week) {
    return Math.sqrt(week);
}





//Part 3: Errors in Judgement 