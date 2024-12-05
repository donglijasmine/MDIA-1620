// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
// Create a variable and use it to store a message visitors to the stable.
// Create a variable and use it to store the cost of a late payment fee.
// Create a variable and use it to store the number of available stalls in the stable.

let horses = [];
const visitorMessage = "Welcome to Wonderland stable! Enjoy your visit.";
const latePaymentFee = 50; // in dollars
let availableStalls = 5;

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.

// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

//------------------------- First day -------------------------//

// **Horse constructor function** //
function Horse(name, nickname, favoriteTreat, age, monthlyRent, isInside, character, feature) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.character = character;
    this.feature = feature;
    this.hungry = false; // initialize as not hungry
    
    this.introduce = function() {
        return `Hi, I am ${this.name}, also known as ${this.nickname}. I love ${this.favoriteTreat} and I am ${this.age} years old.`;
    };

    this.describeUnique = function() {
        return `Unique facts about me: ${this.character} and ${this.feature}.`;
    };
}


// Store the horses you've just created in your "horses" variable.


// **Adding initial horses** //
horses.push(new Horse("Lightning", "Storm", "carrots", 5, 300, true, "fastest runner", "blue eyes" ));
horses.push(new Horse("Sand", "Sandy", "apples", 7, 350, true, "loves jumping", "brown mane"));
horses.push(new Horse("Daisy", "Daze", "strawberries", 4, 280, false, "gentle demeanor", "white spots"));


// Fancy! Another horse wants to be stabled! Create a variable that stores an object

// literal of your new horse, and add it to your "horses" variable.

// **Adding another horse as an object literal** //
const newHorse = {
    name: "Comet",
    nickname: "Commy",
    favoriteTreat: "hay",
    age: 6,
    monthlyRent: 320,
    isInside: true,
    character: "glows in sunlight",
    feature: "loves water",
    hungry: false,
    introduce: function() {
        return `Hi, I am ${this.name}, also known as ${this.nickname}. I love ${this.favoriteTreat} and I am ${this.age} years old.`;
    },
    describeUnique: function() {
        return `Unique facts about me: ${this.character} and ${this.feature}.`;
    }
};
horses.push(newHorse);


// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot/bracket notation.



//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

//** Reference the data structure of horses **//

console.log(horses);
// [
//  Horse {
//   name: 'Lightning',
//    nickname: 'Storm',
//    favoriteTreat: 'carrots',
//   age: 5,
//    monthlyRent: 300,
//    isInside: true,
//    character: 'fastest runner',
//    feature: 'blue eyes',
//    hungry: false,
//    introduce: [Function (anonymous)],
//    describeUnique: [Function (anonymous)]
//  },
//  Horse {
//    name: 'Sand',
//    nickname: 'Sandy',
//    favoriteTreat: 'apples',
//    age: 7,
//    monthlyRent: 350,
//    isInside: true,
//   character: 'loves jumping',
//    feature: 'brown mane',
//    hungry: false,
//    introduce: [Function (anonymous)],
//    describeUnique: [Function (anonymous)]
//  },
//  Horse {
//    name: 'Daisy',
//    nickname: 'Daze',
//    favoriteTreat: 'strawberries',
//    age: 4,
//    monthlyRent: 280,
//    isInside: false,
//    character: 'gentle demeanor',
//    feature: 'white spots',
//    hungry: false,
//    introduce: [Function (anonymous)],
//    describeUnique: [Function (anonymous)]
//  },
//  {
//    name: 'Comet',
//    nickname: 'Commy',
//    favoriteTreat: 'hay',
//    age: 6,
//    monthlyRent: 320,
//    isInside: true,
//    character: 'glows in sunlight',
//    feature: 'loves water',
//    hungry: false,
//    introduce: [Function: introduce],
//    describeUnique: [Function: describeUnique]
//  }
//]
//

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.



// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

availableStalls = 5 - horses.length;
if (availableStalls < 2) {
    console.log("We need to build more stalls.");
} else {
    console.log(`We have ${availableStalls} stalls available!`);
}

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

//** Function to calculate late payment fee **//
function calculateLateFee(horse) {
    let totalFee = horse.monthlyRent + latePaymentFee;
    console.log(`The total amount for ${horse.name} if paid late would be $${totalFee}`);
  }

  // ** Use a for loop to evoke the function to check each horse's late fee **//
  for (let i = 0; i < horses.length; i++) {
    calculateLateFee(horses[i]);
  }



// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

let treatToCheck = "apples";

// Loop through the array using a loop
for (let i = 0; i < horses.length; i++) {
  let horse = horses[i]; // Access the current horse in the array

  if (horse.favoriteTreat === treatToCheck) {
    console.log(`${horse.name} likes ${treatToCheck}!`);
    break; // Exit the loop when a horse that likes the treat is found
  } else {
    console.log(`${horse.name} does not like ${treatToCheck}.`);
  }
}



// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.


// Function to return the nickname of a chosen horse by its name
function getHorseNickname(horseName) {
  for (let i = 0; i < horses.length; i++) { 
      if (horses[i].name === horseName) {
          return horses[i].nickname; 
      }
  }
  return "Horse not found"; // Return a fallback message if no match is found
}

// Invoking the function
let chosenHorseName = "Sand"; // Replace with the desired horse name
let nickname = getHorseNickname(chosenHorseName);

// Logging the return value outside the function
console.log(`The nickname of ${chosenHorseName} is: ${nickname}`);


//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

// Function referencing a unique property
function checkUniqueProperty(horseName) {
    for (let i = 0; i < horses.length; i++) {
        if (horses [i].name === horseName) {
            console.log(`The unique things about ${chosenHorseName} is ${character} and ${feature}`);
        } else {console.log("Horse not found.");
      }
   }
  }
// ** Invoke the function ** //
checkUniqueProperty("Daisy");
checkUniqueProperty("Angel");

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

// ** Function to move all horses outside **//
function moveHorsesOutside() {
    for (let i = 0; i < horses.length; i++) {
      if (!horses[i].isInside) {
        // Check if the horse is already outside
        console.log(`${horses[i].name} is already outside.`);
      } else {
        // Move the horse outside
        horses[i].isInside = false;
        console.log(`${horses[i].name} has been moved outside to spend time in the sun.`);
      }
    }
  }
  
  // Invoke the function to move all horses outside
moveHorsesOutside();
  

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

function swapHorsesInsideOutside() {
    for (let i=0; i < horses.length; i++) {
        if (horses[i].isInside) {
            // Check if the horse is inside
            horses[i].isInside = false;
            console.log(`${horses[i].name}, come outside and enjoy the sunshine.`);
          } else {
            // Move the horse inside
            horses[i].isInside = true;
            console.log(`${horses[i].name}, come inside to get some rest.`);
          } 
    }
}
swapHorsesInsideOutside();

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// ** Function to feed horses and call them in if they are outside ** //
function feedHorses() {
  for (let i = 0; i < horses.length; i++) {
    if (!horses[i].isInside) {
      horses[i].isInside = true; // Move the horse inside
      console.log(`${horses[i].name} has been called in to be fed.`);
    }
    console.log(`${horses[i].name} has been fed a treat.`);
  }
}

// Invoke the function to feed all horses
feedHorses();


// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.


// Function to move horses inside for bedtime when it gets dark
function moveHorsesToBed(isDark) {
  if (isDark) {
    for (let i = 0; i < horses.length; i++) {
      if (!horses[i].isInside) {
        // If the horse is outside, move it inside for bedtime
        horses[i].isInside = true;
        console.log(`${horses[i].name} has been called in for bedtime.`);
      } else {
        // If the horse is already inside, log that it's already inside
        console.log(`${horses[i].name} is already inside.`);
      }
    }
  } else {
    console.log("It's not dark yet. Horses are still outside enjoying the sunshine.");
  }
}


// ** Invoke the function to move horses to bed when it gets dark ** //
moveHorsesToBed(true); // Pass true to indicate that it is dark


//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.