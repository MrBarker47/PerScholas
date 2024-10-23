// // // The extends key declares what parent a child inherits from. For instance, 


// class Animal  {
//     constructor(eyes, legs, isAwake, isMoving) {
//         this.eyes = eyes;
//         this.legs = legs;
//         this.isAwake = isAwake;
//         this.isMoving = isMoving;
//     }
//     sleep() {
//         this.isAwake = false;
//     }
//     wake() {
//         this.isAwake = true;
//     }
//     sit() {
//         this.isMoving = false;
//     }
//     walk() {
//         this.isMoving = true;
//     }
//     speak(sound) {
//         console.log(sound);
//     }
//     toString() {
//         return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//     }
// }
// const person = {
//     name: {
//       first: 'Elyan',
//       last: 'Kemble',
//     },
//     age: 32,
//     location: {
//       city: 'Garland',
//       state: 'Texas',
//       zip: 75040
//     },
//     occupation: 'Front-End Developer'
//   }
  
//   function introduce() {
//     console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//   }


class Learner {
    #grades = [];
    #name = {
        first: '',
        last: '',
    }
    #age;


constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }

}

const learner1 = new Learner('Leeroy', 'Jenkins', 18);
console.log(learner1)
console.log(learner1.age)
learner1.grades = [50, 50, 60]
console.log(learner1.grades)


class Animal {
    static speak(sound) {
        console.log(sound);
    }
}

class Cat extends Animal {
    static speak() {
        super.speak("Meow...");
    }
}

class Dog extends Animal {
    static speak() {
        super.speak("Woof");
    }
}

class Cow extends Animal {
    static speak() {
        super.speak("Moo..")
    }
}

Cow.speak();
Dog.speak();
Cat.speak();