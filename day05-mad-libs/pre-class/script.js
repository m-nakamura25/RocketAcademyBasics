// Store guesses in a global array that persists across Submits.
var guesses = [];

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var followArraysMain = function (input) {
  // Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.

  //Add the user's guess to the guesses array.
  guesses.push(input);

  //Generate a random dice number.
  var randomDiceNumber = rollDice();

  //Initialize output to communicate loss.
  // OUtput the record of all guesses regardless of loss or win.
  var myOutputValue = "You lose. Your guesses: " + guesses;

  //If the guess matches the dice roll, change ouput to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue = `You win. Your guesses: ${guesses}`;
  }

  //Return output value
  return myOutputValue;
};

// =====================

// Initialize an empty names array
var names = [];

var followArraysLoopsMain = function (input) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.

  //Set a boolean value found to a default value of false.
  var found = false;

  //Loop over the names array, and set found to true if the input name already exists in the names array
  var index = 0;

  for (index = 0; index < names.length; index += 1) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
  }

  //If no duplicate name was found, add the input name to the names array.
  if (!found) {
    names.push(input);
  }

  //Return the full array of names
  var myOutputValue = "All names: " + names;
  return myOutputValue;
};
