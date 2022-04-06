//dice game helper function
var rollDice = function (rigged = false) {
  //rig the dice in debug mode
  if (rigged) return 6;

  // produces a float between 0 and 7
  var randomFloat = Math.random() * 7;
  // take off the decimal
  var resultInteger = Math.floor(randomFloat);
  return resultInteger;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var randomNumber1 = rollDice();
  var randomNumber2 = rollDice();

  console.log(`randomNumber1: ${randomNumber1}`);
  console.log(`randomNumber2: ${randomNumber2}`);

  if (
    randomNumber1 == input ||
    randomNumber2 == input ||
    randomNumber1 + randomNumber2 == 11
  ) {
    var myOutputValue = "you win!";
  } else {
    myOutputValue = "you lose!";
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.

  var myOutputValue;
  if (input === "laksa" || input === "hokkien mee") {
    myOutputValue = "noodles";
  } else if (input === "chicken rice" || input === "nasi lemak") {
    myOutputValue = "rice";
  } else {
    myOutputValue = "other";
  }

  return myOutputValue;
};

//4D helper function
var genRandomNumber = function () {
  // produces a float between 0 and 7
  var randomFloat = Math.random() * 9 + 1;
  // take off the decimal
  var resultInteger = Math.floor(randomFloat);
  resultInteger = resultInteger + 1;
  return resultInteger;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.

  var randomNumber1 = genRandomNumber();
  var randomNumber2 = genRandomNumber();
  var randomNumber3 = genRandomNumber();
  var randomNumber4 = genRandomNumber();

  var myOutputValue;

  //Compare input with the 4 digits.
  if (
    input == randomNumber1 ||
    input == randomNumber2 ||
    input == randomNumber3 ||
    input == randomNumber4
  ) {
    myOutputValue =
      "you win! the digits are" +
      randomNumber1 +
      randomNumber2 +
      randomNumber3 +
      randomNumber4;
  } else {
    myOutputValue =
      "you lose!" +
      randomNumber1 +
      randomNumber2 +
      randomNumber3 +
      randomNumber4;
  }
  return myOutputValue;
};

var hawkerRandomNumber = function () {
  // produces a float between 0 and 7
  var randomFloat = Math.random() * 6;
  // take off the decimal
  var resultInteger = Math.floor(randomFloat);
  resultInteger = resultInteger + 1;
  return resultInteger;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.

  // determine what Uncle is cooking with the random number
  var randomNumber = hawkerRandomNumber();

  var unclesDish;

  // assign a random number to each dish
  if (randomNumber == 1) {
    unclesDish = "chicken rice";
  } else if (randomNumber == 2) {
    unclesDish = "roti prata";
  } else if (randomNumber == 3) {
    unclesDish = "nasi lemak";
  } else if (randomNumber == 4) {
    unclesDish = "hokkien mee";
  } else if (randomNumber == 5) {
    unclesDish = "bak kut teh";
  } else if (randomNumber == 6) {
    unclesDish = "laksa";
  }

  switch (randomNumber) {
    case 1:
      unclesDish = "chicken rice";
      break;
    case 2:
      unclesDish = "roti prata";
      break;
    case 3:
      unclesDish = "nasi lemak";
      break;
    case 4:
      unclesDish = "hokkien mee";
      break;
    case 5:
      unclesDish = "bak kut teh";
      break;
    case 6:
      unclesDish = "laksa";
      break;

    default:
      break;
  }

  var myOutputValue;
  var lower = input.toLowerCase();

  // if input == Uncle's dish
  if (lower == unclesDish) {
    myOutputValue = "you get a free meal!";
  } else {
    myOutputValue = "you have to pay!";
  }

  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
