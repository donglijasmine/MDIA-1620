// Function calls we have used before:
// console.log( );
// [ ].push;
// cd <directory name>


//Previously//
let names =["Charlie”, “Strawberry”, “Beans”];
let ages =[5, 2, 10];

console.log(names[0] + "is" + ages[0] + "!");
// "Charlie is 5!"//

console.log(names[1] + "is" + ages[1] + "!");
// "Strawberry is 2!"//

console.log(names[2] + "is" + ages[2] + "!");
// "Beans is 10!" // 

// Reusablity //

let names = ["Charlie", "Strawberry", "Beans"];
let ages =[5,2,10];

function logHorseAge(horse) {
    console.log(names[horse] + "is" + ages[horse] + "!");
}
logHorseAge(0);