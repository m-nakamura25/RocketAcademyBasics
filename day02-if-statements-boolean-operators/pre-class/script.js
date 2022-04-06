/* //compute the area of a triangle
var computeAreaofTriangle = function (base, height) {

  // take the inputs and compute the area of a triangle
  var area = base * height / 2;

  // output the area
  return area;
}; */

/* // based on jobApplication

var generatePushyJobApplication = function (jobTitle, companyName, desiredSalary) {

  // construct the message
  var message = `To whom it may concern at ${companyName}, I want a job right now. Please hire me for the position of ${jobTitle}. I want to be paid ${desiredSalary}. This comes out to ${desiredSalary/12} a month. `;

  // output the messsage
  return message;
 }; */

var orangeJuiceMain = function (input) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.

  // String parse the input into 2
  var parameters = input.split(",");
  var numGuests = parameters[0];
  var numGlassesPerGuest = parameters[1];

  //organize info given
  var numOrangesPerGlass = 4;
  var numOrangesNeeded = numGuests * numGlassesPerGuest * numOrangesPerGlass;

  var myOutputValue = `If ${numGuests} guests are expected and each guest drinks ${numGlassesPerGuest} glasses, you will need ${numOrangesNeeded} oranges.`;
  return myOutputValue;
};

//paint function with only one input value

/* var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.

  // organize info given
  var areaOfEachRoom = 3 * 3;
  var numRooms = 6;

  var areaOneLitreCovers = 300;

  var numCoats = 2;
  var costOfOneLitre = input;

  //calculate total area of house
  var totalArea = areaOfEachRoom * numRooms;

  //calculate total litres of paint needed
  var paintNeededPerCoat = totalArea / areaOneLitreCovers;
  var totalPaintNeededByLitre = paintNeededPerCoat * numCoats;

  // calculate total cost
  var totalCost = totalPaintNeededByLitre * costOfOneLitre;

  // return total cost of paint
  var myOutputValue = `If 1 litre of paint costs $${costOfOneLitre} dollars, the total cost of painting your house will be $${totalCost} dollars.`;
  return myOutputValue;
}; */

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.

  //string parse the input
  var parameters = input.split(",");

  // organize info given
  var costOfOneLitre = parameters[0];
  var numRooms = parameters[1];
  var numCoats = parameters[2];
  var areaOfEachRoom = 3 * 3;
  var areaOneLitreCovers = 300;

  //calculate total area of house
  var totalArea = areaOfEachRoom * numRooms;

  //calculate total litres of paint needed
  var paintNeededPerCoat = totalArea / areaOneLitreCovers;
  var totalPaintNeededByLitre = paintNeededPerCoat * numCoats;

  // calculate total cost
  var totalCost = totalPaintNeededByLitre * costOfOneLitre;

  // return total cost of paint
  var myOutputValue = `If 1 litre of paint costs $${costOfOneLitre} dollars, the total cost of painting your house will be $${totalCost} dollars.`;
  return myOutputValue;
};

// =============

/* // dice game normal helper function
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
}; */

//dice game helper function (with rigged)
var rollDice = function (rigged = false) {
  //rig the dice in debug mode
  if (rigged) return 6;

  // produces a float between 0 and 7
  var randomFloat = Math.random() * 7;
  // take off the decimal
  var resultInteger = Math.floor(randomFloat);
  return resultInteger;
};

//dice game  main function
var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.

  //Generate a random dice number
  var randomDiceNumber = rollDice();
  console.log(randomDiceNumber);

  //Default output value is 'You lose'.
  var myOutputValue = "you lose";

  /*   //If input matches randomDiceNumber, update output.
  var doubleOfInput = input * 2;
  if (doubleOfInput == randomDiceNumber) {
    myOutputValue = "you win";
  } */

  /*   // if the guess equals the dice roll, the user wins.
  if (
    randomDiceNumber == input ||
    randomDiceNumber + 1 == input ||
    randomDiceNumber - 1 == input ||
    randomDiceNumber + 2 == input ||
    randomDiceNumber - 2 == input
  ) {
    var myOutputValue = "you win";
  }
 */

  // the user guesses either odd or even.
  if (randomDiceNumber % 2 == 1) {
    randomDiceNumber = "odd";
    console.log("the dice is odd ");
  } else {
    randomDiceNumber = "even";
    console.log("the die is even ");
  }

  if (randomDiceNumber == input || input == "palatable papaya") {
    myOutputValue = "you win";
  }

  //Return output
  return myOutputValue;
};

// =============

// Secrete Phrase
var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.

  //Set a default value for myOutputValue
  var myOutputValue = "the door shall not open ";

  //If input is our secret phrase, change the value of myOuputValue
  if (
    input == "palatable papaya" ||
    input == "neat noodles" ||
    input == "awesome ayam" ||
    input == "delicious dumplings"
  ) {
    myOutputValue = "you wrote teh secret phrase";
  } else if (input == "not so palatable papaya") {
    myOutputValue += "but you are nearly there.";
  } else {
    myOutputValue += "nope, far from the right phrase";
  }

  //Return myOutputValue as output
  return myOutputValue;
};

// =============

//3.3.2 dice game with 2 dice rolls

/* var diceGameMain = function (input) {
  var randomDiceNumber1 = rollDice((rigged = true));
  var randomDiceNumber2 = rollDice((rigged = true));

  // The default output value is "you lose".
  var myOutputValue = "you lose";

  // If the input matches both random dice numbers, output value is "you win".
  if (
    randomDiceNumber1 == input &&
    randomDiceNumber2 == input &&
    !(randomDiceNumber1 == 1 && randomDiceNumber2 == 1)
  ) {
    myOutputValue = "you win";
  }
  return myOutputValue;
}; */

// =============

//Lesson 3.3.2 Exercises
var diceGameMain = function (input) {
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();

  console.log(`your input: ${input}`);
  console.log(`random dice number 1: ${randomDiceNumber1}`);
  console.log(`random dice number 2: ${randomDiceNumber2}`);

  // The default output value is "you lose".
  var myOutputValue = "you lose";

  // If the input is within 1 of any dice, you win.
  if (
    randomDiceNumber1 == input ||
    randomDiceNumber1 + 1 == input ||
    input == randomDiceNumber1 - 1 ||
    randomDiceNumber2 == input ||
    randomDiceNumber2 + 1 == input ||
    input == randomDiceNumber2 - 1 ||
    (randomDiceNumber1 == 1 && randomDiceNumber2 == 1)
  ) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

// =============

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
