// Data Collecting

const data = [["ID", "Name", "Occupation", "Age"],
              ["42", "Bruce", "Knight", "41"],
              ["57", "Bob", "Fry Cook", "19"],
              ["63", "Blaine", "Quiz Master", "58"],
              ["98", "Bill", "Doctor's Assistant", "26"]]

    console.log(data[2]);

//Part2 Objects
let data2 = [{id: "42", name: "Bruce", occupation: "Knight", age: "41"},
                {id: "57", name: "Bob", occupation: "Fry Cook", age: "19"},
                {id: "63", name: "Blaine", occupation: "Quiz Master", age: "58"},
                {id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26"}]

data2.pop(3);

let index = 1;
let item = {id: "48", name: "Barry", occupation: "Runner", age: "25"};

let newIndex = 4;
let newItem = {id: "7", name: "Biblo", occupation: "None", age: "111"}

data2.splice(index, 0, item);
data2.splice(newIndex, 0, newItem);
console.log(data2);