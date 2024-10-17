let nameVar = "dongli" // This is a string. nameVar is a variable?
console.log(nameVar);

let ageNum = 20; // This is a number. 
console.log(ageNum);

let isHungry = true; // This is a boolean. 
console.log(isHungry);

console.log("im hungry");

console.log (typeof 890);
console.log (typeof "890");
console.log (typeof true);
console.log (typeof fakevar);

let horseName = "Charlie" // This value can be updated

//const horseName = "Charlie"  // This value can't be updated

//let camelCaseExample; // use camelCase for variables

const STABLE_MONTHLY_FEE = 100; // use uppercase for constants

console.log(STABLE_MONTHLY_FEE);
console.log(STABLE_MONTHLY_FEE - 20);
console.log(STABLE_MONTHLY_FEE + 80);
console.log(STABLE_MONTHLY_FEE * STABLE_MONTHLY_FEE);
console.log(STABLE_MONTHLY_FEE / 2 );

let catName = "snowball"
let catNum = 5;
console.log (catName)
console.log (catNum)
let stableIntroduction = `Welcome to "${horseName}'s" stable`; 
console.log (stableIntroduction)

////// LESSON 4 CODE ///////
let horseNickName ="Charming";
let horseAge = 5;
let horseType = "bahkir";
let horseColor = "brown"
let horseIntroduction = `My horse is called "${horseNickName}". He is ${horseAge}. His type is ${horseType}, and his color is ${horseColor}.`
console.log(horseIntroduction)
let Promo = `You would save ${STABLE_MONTHLY_FEE * 3 * 0.1} with a 10% discount applied to a 3 month stay at your stables.`
console.log (Promo)

//////LESSON 5 CODE//////
let word = "Rainbow";
console.log (word.charAt(0));

//////LESSON 6 CODE//////

let isHorseInside=true
let horseOne=[horseName, horseAge, isHorseInside, horseNickName];
let horseTwo=["strawberry", 2, false, "Pie"];

console.log(horseOne);
console.log(horseOne[0]+"'s nickname is" + horseOne[3]);
console.log(horseTwo);
console.log(`${horseTwo[0]}'s nickname is ${horseTwo[3]}`);

console.log(horseOne[0]+ [3]);
horseOne.push("blue");
console.log(horseOne);
console.log(horseOne [1] + horseTwo [1]);

if (horseOne [1] === 3) {
    console.log(horseOne[0]+" is 3");
} else {
    console.log(horseOne[0]+ " is NOT 3");
}
console.log(
    horseOne[0] + " and " + horseTwo[0] + " are staying at the stables"
);

let horseNames=[horseName, "Strawberry", "Beans"];
let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}!`;
console.log(horseIntro);
///// the horseIntro code above is a better than the one below one because it is easier for reading and more efficient //////
let differentHorseIntro=
"There are " +
horseNames.length +
" horses staying at my stables:" +
horseNames[0] +
"," +
horseNames[1] +
"," +
horseNames[2] +
"!";

console.log(differentHorseIntro);

// LAB TODAY - branch lesson-6 done by Sunday
// Stables.js
// - Output an introduction to your horses
// - Output whether your horses are inside or outside at least 3 horses!!!
// Readme
// 3 confusing things
// 3 things you feel like you have a solid understanding of
// Analogies that you use to think about things (gif)



