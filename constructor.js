// constructor
function Horse (name, nickname, faveSnack, monthlyRent, isInside, age, color) {
    this.name = name;
    this.nickname = nickname;
    this.favSnack = faveSnack;
    this.MONTHLY_RENT = monthlyRent;
    this.isInside = isInside;
    this.age = age;
    this.color = color;
    this.introduction = function charlieName() {
        console.log(`This is ${this.name}, their nickname is ${this.nickname}!`);
    }
    this.rentNotice = function rent(daysUntilDue) {
        console.log(`${this.name}'s rent is due in ${daysUntilDue} days, and is $${this.MONTHLY_RENT}! Please pay promptly!`)
    }
}

let strawberry = new Horse("Strawberry","Shortcake","raspberries", 125, true, 3, "pink");
let beans = new Horse("Beans","Beanie", "beans", 120, false, 23, "brown");
let charlie = new Horse("Charlie", "Chuck", "strawberries", 125, true, 9, "grey");

console.log(charlie.rentNotice(20));
console.log(charlie);
console.log(beans);
console.log(strawberry);