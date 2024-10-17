// LAB TODAY - branch lesson-6 done by Sunday
// Stables.js
// - Output an introduction to your horses
// - Output whether your horses are inside or outside at least 3 horses!!!
// Readme
// 3 confusing things
// 3 things you feel like you have a solid understanding of
// Analogies that you use to think about things (gif)


let horseNames=["Apple", "June", "Sebastian"];


let horseOne=["Apple", 5, true]
let horseTwo=["June",3, true]
let horseThree=["Sebastian",8,false]

if (horseOne[2]) {
    console.log(horseOne[0] + " is inside.")
}

if (horseTwo[2]) {
    console.log(horseTwo[0] + " is inside.")
}

if (horseThree[2]){
    console.log(horseThree[0] + " is inside")
} else {
    console.log(horseThree[0] + " is outside.")
}


let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}!`;
console.log(horseIntro);

