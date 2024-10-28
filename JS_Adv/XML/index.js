// async function logJSONData() {
//     const response = await fetch("http://www.example.com/something.json"); //Promise
//     const jsonData = await response.json(); // Promise 2
//     console.log(jsonData); // Data
// }

// logJSONData();


const dog = document.getElementById('dog');
dog.addEventListener("click", getNewDog);

async function getNewDog() {
    dog.style.cursor = 'wait';
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    const url = jsonData.message;

    dog.src = url;
    dog.style.cursor = 'pointer';
}

getNewDog();