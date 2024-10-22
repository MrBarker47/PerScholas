// let global = 0;
// function labWork(n) {
//     if(n === 0) {
//         console.log("done");
//         return
//     }
//     console.log("almost done");
//     labWork(n - 1);
// }
// labWork(4);



function labWork(n) {
    if(n === 0) {
       return (1);
        return (n * factorial(n - 1));
    }
}

labWork();