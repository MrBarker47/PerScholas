//Part 1 Thinking Functionally 
//Take array of numbers and return the sum.
function array() {
    let list = [1,2,3,4,5,6,7];
    let sum = 0;
    for(let i = 0; i < list.length; i++) {
        list.forEach((arr) => sum += arr);
        }
      console.log(sum);
    }
array();

//Take array of numbers and return the average.
function newArray() {
    let newList = [1,2,3,4];
    let avg = 0;
    for(let i = 0; i < newList.length; i++) {
        newList.forEach((count) => avg - count);
    }
    console.log(avg);
}

newArray();

//Take an array of strings and return the longest string
function str() {
    let newString = ['Money Talks', 'Friday', 'Rush Hour 2', 'Low Down Dirty Shame'];
    let long = 0;
    for(let i = 0; i < newString.length; i++) {
            return long = newString[i];
    }
  
}

console.log(str());

//Part 2 Thinking Methodically
let container = [{id: "42", name: "Bruce", occupation: "Knight", age: "41"},
                 {id: "48", name: "Barry", occupation: "Runner", age: "25"},
                 {id: "57", name: "Bob", occupation: "Fry Cook", age: "19"},
                 {id: "63", name: "Blaine", occupation: "Quiz Master", age: "58"},
                 {id: "7", name:   "Bilbo", occupation: "None", age: "111"}
                ];

                
                container.sort((a, b) => a.age - b.age);
                console.log(container);

                //