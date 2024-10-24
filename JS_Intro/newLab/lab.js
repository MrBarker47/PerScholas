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
// array();

//Take array of numbers and return the average.
function newArray() {
    let newList = [1,2,3,4];
    let avg = 0;
    for(let i = 0; i < newList.length; i++) {
       avg += newList[i];
    }
    console.log(avg / newList.length) ;
}

// newArray();

// Take an array of strings and return the longest string
function str() {
    let newString = ['Money Talks', 'Friday', 'Rush Hour 2', 'Low Down Dirty Shame'];
    let string = 0;
    let long;
    for(let i = 0; i < newString.length; i++) {
        if(newString[i].length > string) {
            let string = newString[i].length;
            long = newString[i];
        }
    }
    console.log(long);
}
// console.log(str());



//Part 2 Thinking Methodically
let container = [{id: "42", name: "Bruce", occupation: "Knight", age: "41"},
                 {id: "48", name: "Barry", occupation: "Runner", age: "25"},
                 {id: "57", name: "Bob", occupation: "Fry Cook", age: "19"},
                 {id: "63", name: "Blaine", occupation: "Quiz Master", age: "58"},
                 {id: "7", name:   "Bilbo", occupation: "None", age: "111"}
                ];

                
                container.sort((a, b) => a.age - b.age);
                console.log(container);

        // filter container
        let j = container.filter(remove => remove.age < 50);
        console.log(j); 
    

        //Map Container
        // let e = container.map((change) => change.occupation = 'Job');
        // let t = container.map((a) => a.age - -1);

        // console.log(e);
        // console.log(t);

        //Reduce Container
        // let count = container.age;
        // let newCount = container.reduce((count, sum) => count += sum);
        // console.log(newCount);
        
        
        //Thinking Criticaly 
            // function age() {
            //     for(let i = 0; i < container.age; i++) {
            //         container.age += 1;
            //     }
            //     console.log(age);
            // }

            // age();