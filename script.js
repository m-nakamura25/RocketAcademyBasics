// define global variables

var userWinCount = 0;
var compWinCount = 0;
var tieCount = 0;
var timesPlayed = 0;
var winPercentage = 0;
var userName = "";
var waitingForName = true;
var waitingForVersion = false;
var gameVersion = "regular";

// =================

var setName = function (input) {
  //set the name
  userName = input;

  //now that we have the name, switch mode
  waitingForName = false;
  waitingForVersion = true;

  var output = `Hello, ${userName}! Please enter reverse or regular.`;

  return output;
};

// =================

var setVersion = function (input) {
  //set reverse version or regular version

  var output;

  if (input == "regular" || input == "regular ") {
    // then game version remains defaul value of "regular"

    //now that we have game version, switch mode
    waitingForVersion = false;

    output =
      "You are now in regular game mode! Please enter rock, scissors, or paper.";

    return output;
  } else if (input == "reverse" || input == "reverse ") {
    //then game version becomes "reverse"

    gameVersion = "reverse";

    //now that we have game version, switch mode
    waitingForVersion = false;

    output =
      "You are now in reverse game mode! Please enter rock, scissors, or paper.";
    return output;
  }
};

// =================

var generateRandomHand = function () {
  // produces a float between 0 and 3
  var randomInteger = Math.floor(Math.random() * 3);

  console.log(`random integer: ${randomInteger}`);

  var compHand = "";

  // assign each number to a hand
  switch (randomInteger) {
    case 0:
      compHand = "rock";
      break;
    case 1:
      compHand = "scissors";
      break;
    case 2:
      compHand = "paper";
      break;

    default:
      break;
  }

  return compHand;
};

// =================

var determineResultRegular = function (compHand, userHand) {
  var result;
  console.log("determining regular result");

  if (compHand == userHand) {
    result = "It's a draw!";
    tieCount += 1;
  } else if (
    (compHand == "rock" && userHand == "scissors") ||
    (compHand == "scissors" && userHand == "paper") ||
    (compHand == "paper" && userHand == "rock")
  ) {
    result = "The computer wins!";
    compWinCount += 1;
  } else {
    result = "You win!";
    userWinCount += 1;
  }

  return result;
};

// =================

var determineResultReverse = function (compHand, userHand) {
  var result;
  console.log("determining reverse result");

  if (compHand == userHand) {
    result = "It's a draw!";
    tieCount += 1;
  } else if (
    (userHand == "rock" && compHand == "scissors") ||
    (userHand == "scissors" && compHand == "paper") ||
    (userHand == "paper" && compHand == "rock")
  ) {
    result = "The computer wins!";
    compWinCount += 1;
  } else {
    result = "You win!";
    userWinCount += 1;
  }

  return result;
};

// =================

var main = function (input) {
  var myOutputValue = "";

  //before starting game, set name and set game version.
  if (waitingForName == true) {
    //run setName function

    myOutputValue = setName(input);

    return myOutputValue;
  } else if (waitingForVersion == true) {
    //run setVersion function

    myOutputValue = setVersion(input);

    return myOutputValue;
  }

  //validate input before going on
  if (input != "rock" && input != "scissors" && input != "paper") {
    // If input is not valid, instruct player to enter a valid input.

    myOutputValue = "Please enter rock, scissors, or paper. ";
    return myOutputValue;
  }

  //now that we're ready to start playing, set define game variables
  var userHand = input;
  var compHand;
  var result;

  // increase the timesPlayed count.
  timesPlayed += 1;

  // generate a random computer hand
  var compHand = generateRandomHand();

  console.log(`compHand = ${compHand}`);
  console.log(`userHand: ${userHand}`);

  // determine result
  if (gameVersion == "regular") {
    result = determineResultRegular(compHand, userHand);
  } else if (gameVersion == "reverse") {
    result = determineResultReverse(compHand, userHand);
  }

  console.log(`result: ${result}`);

  //Calculate winning percentage
  if (userWinCount == 0) {
    winPercentage = 0;
  } else {
    winPercentage = Math.round((userWinCount / timesPlayed) * 100);
  }

  console.log(userWinCount, timesPlayed, winPercentage);
  console.log(`===============`);

  // output the result
  var myOutputValue = `${userName}: ${userHand} <br>
  Computer: ${compHand} <br><br>
  ${result} <br><br> 
  Times played: ${timesPlayed} <br>
  Wins: ${userWinCount} <br>
  Losses: ${compWinCount} <br>
  Ties: ${tieCount}<br>
  Your winning percentage: ${winPercentage}%`;

  return myOutputValue;
};
