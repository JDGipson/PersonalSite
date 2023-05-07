// let yourMove = "attack";
// let moveOfAI = "defend";

// if (yourMove === "attack") {
//   console.log("You attacked your opponent");
// } else if (yourMove !== "attack") {
//   console.log("You failed to beat the opponent's defense");
// }

// let aiHealthStat = 100;
// let aiAttackStat = 50;
// let aiDefenseStat = 60;
// let aiSpecialAttack = "Laser Beam";

// let yourHealth = 100;
// let yourAttackStat = 45;
// let yourDefenseStat = 55;
// let yourSpecialAttack = "Logic Bomb";

// if (aiHealthStat <= 0 && yourHealth > 0) {
//   console.log("You win the Game");
// } else if (aiHealthStat > 0 && yourHealth <= 0) {
//   console.log("You lose the game");
// } else {
//   console.log("The game continues");
// }

// if (aiAttackStat > yourDefenseStat) {
//   console.log(yourHealth - aiAttackStat);
// } else if (aiAttackStat < yourHealth) {
//   console.log("You took no damage");
// }

// let machineScrap = "whizbang";
// let processorChipCode = 196381049;
// let numOfBugsInAI = null;
// let isAIRunningRampant = false;

// function boss(var1) {
//   console.log(typeof var1);
// }

// boss(machineScrap);
// boss(processorChipCode);
// boss(numOfBugsInAI);
// boss(isAIRunningRampant);

// function defaultGreet(firstName, lastName) {
//   if (lastName === "") {
//     console.log(firstName + " " + "Doe");
//   } else "firstName" + "" + "lastName";

// }

// console.log(defaultGreet("Jessie", ""));

// function myMnemonic(stringA, stringB, stringC, stringD) {
//   console.log(
//     stringA.length + stringB.length + stringC.length + stringD.length
//   );
// }
// myMnemonic("Jessie", "Skiera", "Colton", "gipson");

// function evenOrOdd(numValue) {
//   if (numValue % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(evenOrOdd("33"));

function budget(bounty, reward) {
  if (bounty === 5000) {
    return 3500;
  } else if (bounty === 10000) {
    return 7500;
  }
}

console.log(budget(5000));
