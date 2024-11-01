const adventurer = {
    name: "Batman",
    health: 10,
    inventory: ["Batarang", "Batclaw", "Smoke Bomb"],
    companion: {
        name: "Leo",
        type: "Cat",
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
        }
    }
   
}

const batman = new Character("Batman");
batman.inventory = ["sword", "potion", "artifact"];
batman.companion = new Character("Leo");
batman.companion.type = "Cat";
batman.companion.companion = new Character("Frank");
batman.companion.companion.type = "Flea";
batman.companion.companion.inventory = ["small hat", "sunglasses"];

class Adventurer extends Character {
    constructor (name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
        this.MAX_HEALTH = 100;
        this.ROLES = "Fighter";
    }
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class AdventurerFactory {
    constructor (role) {
        this.role = role;
        this.adventurers = [];
    }
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
        return this.adventurers[index];
    }
    findByIndex (name) {
        return this.adventurers.find((a) => a.name === name)
    }
}

const healers = new AdventurerFactory("Healer");
const batman = healers.generate("Batman");


console.log(adventurer.inventory[0]);

