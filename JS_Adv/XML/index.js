// async function logJSONData() {
//     const response = await fetch("http://www.example.com/something.json"); //Promise
//     const jsonData = await response.json(); // Promise 2
//     console.log(jsonData); // Data
// }

// logJSONData();


document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);

async function testRequest() {
	let inputVal = document.getElementById("myInput").value;
    let requestBody = { data: inputVal };

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', 
        requestBody, { 
        headers: { 
            'Content-Type': 'application/json; charset=UTF-8' 
        }
    });

    logResponse(response);
}

async function logResponse(response) {
    console.log(response.data);
}