// define global variables

var userWinCount = 0;
var compWinCount = 0;
var drawCount = 0;
var timesPlayed = 0;
var winPercentage = 0;
var userName = "";
var waitingForName = true;
var waitingForVersion = false;
var gameVersion = "regular";
var mostRecentWinner = "No one";

// =================

var setName = function (input) {
  var output = "";

  if (input == "") {
    output = "Input your name to start the game.";
    return output;
  }

  //set the name
  userName = input;

  //now that we have the name, switch mode
  waitingForName = false;
  waitingForVersion = true;

  output = `Hello, ${userName}! <br>
  Please enter "regular" or "reverse" or "muk-jji-ppa" or "computer" to set the game version.<br><br>
  ===================<br><br>
  Regular: Just regular rock paper scissors. <br><br>
  Reverse: The rules are reversed: scissors beat stone, stone beats paper, and paper beats scissors. <br><br>
  Muk-jji-ppa: Korean version of rock paper scissors, where after showing their hands, the player with the winning throw shouts "muk-jji-ppa!" upon which both players throw again... and again... until both players throw the same item, at which point whoever was the last winner becomes the actual winner. <br><br>
  Computer: The computer will play for you, against itself. `;

  return output;
};

// =================

//set game version
var setVersion = function (input) {
  var output;

  //validate input
  if (
    input != "regular" &&
    input != "reverse" &&
    input != "muk-jji-ppa" &&
    input != "computer"
  ) {
    // If input is not valid, instruct player to enter a valid input.

    output = `Please enter "regular" or "reverse" or "muk-jji-ppa" or "computer".`;
    return output;
  }

  //now that we have game version, switch mode
  waitingForVersion = false;

  if (input == "regular") {
    // then game version remains defaul value of "regular"

    output = `You are now in regular game mode! Please enter "rock", "scissors", or "paper".`;

    return output;
  } else if (input == "reverse") {
    //then game version becomes "reverse"

    gameVersion = "reverse";

    output = `You are now in reverse game mode! Please enter "rock", "scissors", or "paper".`;
    return output;
  } else if (input == "muk-jji-ppa") {
    //then game version becomes "muk-jji-ppa"

    gameVersion = "muk-jji-ppa";

    console.log(gameVersion);

    output = `You are now in muk-jji-ppa game mode! Please enter "rock", "scissors", or "paper".`;
    return output;
  } else if (input == "computer") {
    //then game version becomes "computer"

    gameVersion = "computer";

    output =
      "You are now in computer vs. computer game mode! Please press the Submit button.";

    return output;
  }
};

// =================

var generateRandomHand = function () {
  // produces an integer between 0 and 3
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
    drawCount += 1;
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

  // increase the timesPlayed count.
  timesPlayed += 1;

  return result;
};

// =================

var determineResultReverse = function (compHand, userHand) {
  var result;
  console.log("determining reverse result");

  if (compHand == userHand) {
    result = "It's a draw!";
    drawCount += 1;
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

  // increase the timesPlayed count.
  timesPlayed += 1;

  return result;
};

// =================

//muk-ji-ppa  version

//when draw, the most recent winner becomes the final winner
//if not draw, no one actually wins, they just become most recent winner

var determineResultKorean = function (compHand, userHand) {
  var result;
  console.log("determining muk-jji-ppa result");

  if (compHand == userHand) {
    result = `${mostRecentWinner} ultimately wins!`;

    if (mostRecentWinner == "Computer") {
      compWinCount += 1;
    } else if (mostRecentWinner == userName) {
      userWinCount += 1;
    } else if (mostRecentWinner == "No one") {
      drawCount += 1;
    }

    // increase the timesPlayed count.
    timesPlayed += 1;

    //Reset mostRecentWinner variable
    mostRecentWinner = "No one";
  } else if (
    (userHand == "rock" && compHand == "scissors") ||
    (userHand == "scissors" && compHand == "paper") ||
    (userHand == "paper" && compHand == "rock")
  ) {
    mostRecentWinner = userName;

    result = "You won this round. Keep playing to get the final winner. ";
  } else {
    mostRecentWinner = "Computer";

    result =
      "The computer won this round. Keep playing to get the final winner. ";
  }

  return result;
};

// =================

var main = function (input) {
  var myOutputValue = "";

  //before starting game, set name and game version.
  if (waitingForName == true) {
    //run setName function

    myOutputValue = setName(input);

    return myOutputValue;
  } else if (waitingForVersion == true) {
    //run setVersion function

    console.log("running setversion function ");

    myOutputValue = setVersion(input);

    return myOutputValue;
  }

  //validate input before going on
  if (
    input != "rock" &&
    input != "scissors" &&
    input != "paper" &&
    gameVersion != "computer"
  ) {
    // If input is not valid, instruct player to enter a valid input.

    myOutputValue = `Please enter "rock", "scissors", or "paper". `;
    return myOutputValue;
  }

  //now that we're ready to start playing, define game variables
  if (gameVersion != "computer") {
    var userHand = input;
  }
  var compHand;
  var result;

  // generate a random computer hand
  var compHand = generateRandomHand();
  if (gameVersion == "computer") {
    userHand = generateRandomHand();
  }

  console.log(`compHand = ${compHand}`);
  console.log(`userHand: ${userHand}`);

  // determine result
  if (gameVersion == "regular" || gameVersion == "computer") {
    result = determineResultRegular(compHand, userHand);
  } else if (gameVersion == "reverse") {
    result = determineResultReverse(compHand, userHand);
  } else if (gameVersion == "muk-jji-ppa") {
    result = determineResultKorean(compHand, userHand);
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

  //set message about what to do next
  var nextMessage = `Enter "rock", "scissors", or "paper" to play again. `;
  if (gameVersion == "computer") {
    nextMessage = "Press the Submit button again to play again.";
  }

  // output the result
  var myOutputValue = `${userName}: ${userHand} <br>
  Computer: ${compHand} <br><br>
  ${result} <br><br> 
  ${nextMessage} <br>
  Refresh the page to try a different game version.<br><br>
  =======================<br><br>
  Times played: ${timesPlayed} <br>
  Wins: ${userWinCount} <br>
  Losses: ${compWinCount} <br>
  Draws: ${drawCount}<br>
  Your winning percentage: ${winPercentage}%`;

  return myOutputValue;
};
