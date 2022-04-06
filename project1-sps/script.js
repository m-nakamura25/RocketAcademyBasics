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

var generateRandomNum = function () {
  // produces a float between 0 and 3
  var randomFloat = Math.random() * 3;

  console.log(`random float: ${randomFloat}`);

  // take off the decimal
  var resultInteger = Math.floor(randomFloat);
  resultInteger++;

  console.log(`result integer: ${resultInteger}`);

  return resultInteger;
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
  if (waitingForName == true) {
    //set the name
    userName = input;

    //now that we have the name, switch mode
    waitingForName = false;
    waitingForVersion = true;

    result = `Hello, ${userName}! Please enter reverse or regular.`;
    return result;
  } else if (waitingForVersion == true) {
    //set reverse mode or regular mode
    if (input == "regular" || input == "regular ") {
      waitingForVersion = false;

      result =
        "You are now in regular game mode! Please enter rock, scissors, or paper.";
      return result;
    } else if (input == "reverse" || input == "reverse ") {
      gameVersion = "reverse";
      waitingForVersion = false;

      result =
        "You are now in reverse game mode! Please enter rock, scissors, or paper.";
      return result;
    }
  } else if (input != "rock" && input != "scissors" && input != "paper") {
    // validate input

    result = "Please enter rock, scissors, or paper. ";
    return result;
  }

  //define variables
  var userHand = input;
  var compHand;
  var result;

  // increase the timesPlayed count.
  timesPlayed += 1;

  // generate a random number (0-2)
  var compRandomNum = generateRandomNum();

  // assign each number to a hand
  switch (compRandomNum) {
    case 1:
      compHand = "rock";
      break;
    case 2:
      compHand = "scissors";
      break;
    case 3:
      compHand = "paper";
      break;

    default:
      break;
  }

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
