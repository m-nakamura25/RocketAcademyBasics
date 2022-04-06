//global scope
var globalVariable = 0;

//also global scope
var introScopeMain = function (input) {
  //function scope
  console.log(`globalVariable has a value of ${globalVariable}`);

  //we can manipulate the value of a global variable
  //without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);

  let myOutputValue;
  if (globalVariable % 2 == 0) {
    //block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `globalVariable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }

  return myOutputValue;
};

// =============================================

//global variables
var prevDiceRoll = 0;
var bankRoll = 10;
var winCount = 0;
var numGamesPlayed = 0;

//helper function to get random dice roll
var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

//helper function to get previous dice roll info.
var getPrevDiceRollInfo = function () {
  //Handle the scenario where this is the first roll.
  if (prevDiceRoll == 0) {
    return `This was your first roll.`;
  }

  //since this is not the first roll, display the previous roll's value to the user
  return `Your previous roll was ${prevDiceRoll}.`;
};

var getWinRatio = function () {
  var winRatio = (winCount / numGamesPlayed) * 100;
  winRatio = Math.round(winRatio);
  console.log(
    `getWinRatio function numGamesPlayed: ${numGamesPlayed} winCount: ${winCount}`
  );

  if (winCount == 0) {
    winRatio = 0;
  }

  return winRatio;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.

  var prevDiceRollInfo = getPrevDiceRollInfo();

  var randomDiceNumber = rollDice();
  numGamesPlayed++;
  console.log(`number of games played: ${numGamesPlayed}`);

  //update prevDiceRoll with the current dice roll (for the next time)
  prevDiceRoll = randomDiceNumber;

  var thisOutcome = `You lose!`;

  // change bankRoll state if the dice matches the randomDice
  if (randomDiceNumber == input) {
    bankRoll = bankRoll + 1;
    winCount++;

    thisOutcome = `You win!`;
  }

  var winRatio = getWinRatio();

  var myOutputValue =
    prevDiceRollInfo +
    `You win ${winRatio}% of the time. ` +
    `You just rolled a ${randomDiceNumber}. You guessed ${input}. ${thisOutcome}  Current bank roll: ${bankRoll}`;

  return myOutputValue;
};

// =============================================

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// =============================================

// Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.

var guesses = [];
var freqOne = 0;
var freqTwo = 0;
var freqThree = 0;
var freqFour = 0;
var freqFive = 0;
var freqSix = 0;

var incrFreqCount = function (randomDiceNumber) {
  //Add number to frequency count.
  switch (randomDiceNumber) {
    case 1:
      freqOne += 1;
      break;
    case 2:
      freqTwo += 1;
      break;
    case 3:
      freqThree += 1;
      break;
    case 4:
      freqFour += 1;
      break;
    case 5:
      freqFive += 1;
      break;
    case 6:
      freqSix += 1;
      break;

    default:
      break;
  }

  console.log(`freqOne: ${freqOne}`);
  console.log(`freqTwo: ${freqTwo}`);
  console.log(`freqThree: ${freqThree}`);
  console.log(`freqFour: ${freqFour}`);
  console.log(`freqFive: ${freqFive}`);
  console.log(`freqSix: ${freqSix}`);
  console.log("=================");
};

var getMostRolledNumInfo = function () {
  if (
    freqOne > freqTwo &&
    freqOne > freqThree &&
    freqOne > freqFour &&
    freqOne > freqFive &&
    freqOne > freqSix
  ) {
    return "You roll 1 the most. ";
  } else if (
    freqTwo > freqOne &&
    freqTwo > freqThree &&
    freqTwo > freqFour &&
    freqTwo > freqFive &&
    freqTwo > freqSix
  ) {
    return "You roll 2 the most. ";
  } else if (
    freqThree > freqOne &&
    freqThree > freqTwo &&
    freqThree > freqFour &&
    freqThree > freqFive &&
    freqThree > freqSix
  ) {
    return "You roll 3 the most. ";
  } else if (
    freqFour > freqOne &&
    freqFour > freqTwo &&
    freqFour > freqThree &&
    freqFour > freqFive &&
    freqFour > freqSix
  ) {
    return "You roll 4 the most. ";
  } else if (
    freqFive > freqOne &&
    freqFive > freqTwo &&
    freqFive > freqThree &&
    freqFive > freqFour &&
    freqFive > freqSix
  ) {
    return "You roll 5 the most. ";
  } else if (
    freqSix > freqOne &&
    freqSix > freqTwo &&
    freqSix > freqThree &&
    freqSix > freqFour &&
    freqSix > freqFive
  ) {
    return "You roll 6 the most. ";
  } else {
    return "You don't have a most rolled number. ";
  }
};

var mostRolledMain = function (input) {
  // //Add the user's guess to the guesses array.
  // guesses.push(input);

  //Generate a random dice number.
  var randomDiceNumber = rollDice();

  incrFreqCount(randomDiceNumber);

  //Find most rolled number.
  var mostRolledNumInfo = getMostRolledNumInfo();

  //Initialize output to communicate loss.
  var outcome = `You lose.`;

  //If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    outcome = `You win.`;
  }

  var myOutputValue = `You just rolled a ${randomDiceNumber}. ${mostRolledNumInfo} You guessed ${input}. ${outcome}`;

  //Return output value
  return myOutputValue;
};

// =============================================

// Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
var point = 0;

var guessingMain = function (input) {
  var randomDiceNumber = rollDice();

  var outcome = "You lose!";

  if (randomDiceNumber == input) {
    point = point + 2;
    outcome = "You win!";
  } else if (randomDiceNumber - 1 == input || randomDiceNumber + 1 == input) {
    point = point + 1;
    outcome = "You win!";
  }

  var myOutputValue = `You rolled: ${randomDiceNumber}. You guessed ${input}. ${outcome} You have ${point} points.`;
  return myOutputValue;
};

// =============================================

// Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.

var advancedGuessingMain = function (input) {
  var randomDiceNumber = rollDice();

  var outcome = "You lose!";

  if (randomDiceNumber == input) {
    point = point + 5;
    outcome = "You win!";
  } else if (randomDiceNumber - 1 == input || randomDiceNumber + 1 == input) {
    point = point + 4;
    outcome = "You win!";
  } else if (randomDiceNumber - 2 == input || randomDiceNumber + 2 == input) {
    point = point + 3;
    outcome = "You win!";
  } else if (randomDiceNumber - 3 == input || randomDiceNumber + 3 == input) {
    point = point + 2;
    outcome = "You win!";
  } else if (randomDiceNumber - 4 == input || randomDiceNumber + 4 == input) {
    point = point + 1;
    outcome = "You win!";
  }

  var myOutputValue = `You rolled: ${randomDiceNumber}. You guessed ${input}. ${outcome} You have ${point} points.`;
  return myOutputValue;
};

// =============================================

//initial game state
var mode = "green";

/* var followAlongMain = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  return myOutputValue;
}; */

// =============================================

var redModeMain = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  } else if (input == "redmode") {
    mode = "red";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  } else if (mode == "red") {
    myOutputValue = " Love is friendship that has caught fire. ";
  }

  return myOutputValue;
};

// =============================================
