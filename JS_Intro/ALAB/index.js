let fizz = 3;
let Buzz = 5;

for(let i = 1; i <= 100; i++) {
  console.log(i);
  if(i % fizz === 0) {
    console.log("Fizz");

  } else if (i % Buzz === 0) {
       console.log("Buzz");
    
   } else if (i % 3 && 5) {
       console.log("FizzBuzz");
    }

}

