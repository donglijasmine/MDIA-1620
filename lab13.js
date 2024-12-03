let horses = [];
const visitorMessage = "Welcome to Wonderland stable! Enjoy your visit.";
const latePaymentFee = 50; // in dollars
let availableStalls = 10;

// **Horse constructor function** //
function Horse(name, nickname, favoriteTreat, age, monthlyRent, location, uniqueProperty1, uniqueProperty2) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.location = location; // true for inside, false for outside
    this.uniqueProperty1 = uniqueProperty1;
    this.uniqueProperty2 = uniqueProperty2;
    this.hungry = false; // initialize as not hungry
    
    this.introduce = function() {
        return `Hi, I am ${this.name}, also known as ${this.nickname}. I love ${this.favoriteTreat} and I am ${this.age} years old.`;
    };

    this.describeUnique = function() {
        return `Unique facts about me: ${this.uniqueProperty1} and ${this.uniqueProperty2}.`;
    };
}


// **Adding initial horses** //
horses.push(new Horse("Lightning", "Storm", "carrots", 5, 300, true, "fastest runner", "blue eyes" ));
horses.push(new Horse("Sand", "Sandy", "apples", 7, 350, true, "loves jumping", "brown mane"));
horses.push(new Horse("Daisy", "Daze", "strawberries", 4, 280, false, "gentle demeanor", "white spots"));

// **Adding another horse as an object literal** //
const newHorse = {
    name: "Comet",
    nickname: "Commy",
    favoriteTreat: "hay",
    age: 6,
    monthlyRent: 320,
    location: true,
    uniqueProperty1: "glows in sunlight",
    uniqueProperty2: "loves water",
    hungry: false,
    introduce: function() {
        return `Hi, I am ${this.name}, also known as ${this.nickname}. I love ${this.favoriteTreat} and I am ${this.age} years old.`;
    },
    describeUnique: function() {
        return `Unique facts about me: ${this.uniqueProperty1} and ${this.uniqueProperty2}.`;
    }
};
horses.push(newHorse);