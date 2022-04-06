var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var wordList = ["banana", "chisel", "faucet"];
  //Generate random chosen word
  var randomNum = Math.random() * 3;
  var randomDig = Math.floor(randomNum);
  var chosenWord = wordList[randomDig];
  console.log(chosenWord);
  //how many correct guesses the player still needs until she wins.
  var myOutputValue = "Two more words to go";

  if (input == chosenWord) {
    numOfCorrectGuesses += 1;
    guessWords.push(input); //add elements to guessWords list
    if (numOfCorrectGuesses == 2) {
      // output all information such as the guessed word, the secret word.
      myOutputValue = `You win! Your guessed words: ${guessWords[0]}, ${guessWords[1]}, The secret Word is ${chosenWord}`;
      numOfCorrectGuesses = 0; //reset correct guess count back to 0
      guessWords = []; //reset list to empty
    }
    //how many correct guesses the player still needs until she wins.
    myOutputValue = `One more word to go. Your guessed word: ${guessWords[0]}`;
  }

  return myOutputValue;
};

var numOfCorrectGuesses = 0;
var guessWords = [];
var previousOutcome = false;

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var wordList = ["banana", "chisel", "faucet"];
  //Generate random chosen word
  var randomNum = Math.random() * 3;
  var randomDig = Math.floor(randomNum);
  var chosenWord = wordList[randomDig];
  console.log(chosenWord);
  //how many correct guesses the player still needs until she wins.
  var myOutputValue = "Two more words to go";

  if (input == chosenWord) {
    numOfCorrectGuesses += 1;
    guessWords.push(input); //add elements to guessWords list
    previousOutcome = true;
    myOutputValue = `One more word to go. Your guessed ${input}. The secret Word is ${chosenWord}`;
    if (numOfCorrectGuesses == 2) {
      // output all information such as the guessed word, the secret word.
      myOutputValue = `You win! Your guessed words: ${guessWords[0]}, ${guessWords[1]}, The secret Word is ${chosenWord}`;
      numOfCorrectGuesses = 0; //reset correct guess count back to 0
      guessWords = []; //reset list to empty
    }
  } else {
    if (previousOutcome == true) {
      numOfCorrectGuesses = 0; //reset correct guess count back to 0
      guessWords = []; //reset list to empty
      previousOutcome = false;
      myOutputValue = "Two more words to go";
    }
  }
  return myOutputValue;
};

//Right here!
var round = true;

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var wordList = ["banana", "chisel", "faucet"];
  //Generate random chosen word
  var randomNum = Math.random() * 3;
  var randomDig = Math.floor(randomNum);
  var chosenWord = wordList[randomDig];
  console.log(chosenWord);

  //at start of round, choose random number of times a player need to win in a row.
  if (round == true) {
    var randomNumber = Math.random() * 3;
    var randomX = Math.floor(randomNumber) + 2;
    round = false; //set to false so that throughout the round it will not run this block again
  }

  //how many correct guesses the player still needs until she wins.
  var myOutputValue = `${randomX} more words to go`;

  if (input == chosenWord) {
    numOfCorrectGuesses += 1;
    guessWords.push(input); //add elements to guessWords list
    previousOutcome = true;
    myOutputValue = `${
      randomX - numOfCorrectGuesses
    } more word to go. Your guessed ${input}. The secret Word is ${chosenWord}`;
    if (numOfCorrectGuesses == randomX) {
      // output all information such as the guessed word, the secret word.
      myOutputValue = `You win! Your guessed ${input} The secret Word is ${chosenWord}`;
      numOfCorrectGuesses = 0; //reset correct guess count back to 0
      guessWords = []; //reset list to empty
      round = true; //as player won the game, round resets to true and the if loop above comes back to play
    }
  } else {
    if (previousOutcome == true) {
      numOfCorrectGuesses = 0; //reset correct guess count back to 0
      guessWords = []; //reset list to empty
      previousOutcome = false;
      myOutputValue = `${randomX} more words to go`;
    }
  }
  return myOutputValue;
};

var randomX = 0;

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var randomDecimal = Math.random() * 6; //0-0.9999... * 6
  var randomDice = Math.floor(randomDecimal) + 1; // example: 5.8989 -> 5 then plus 1
  var myOutputValue = `you lose`;

  //at start of round, choose random number of times a player need to win in a row.
  if (round == true) {
    var randomNumber = Math.random() * 3;
    randomX = Math.floor(randomNumber) + 1;
    round = false; //set to false so that throughout the round it will not run this block again
  }

  if (input > randomDice - randomX && input < randomDice + randomX) {
    myOutputValue = `you won. your guess: ${input}, dice roll was ${randomDice}, condition was ${randomX}`;
    round = true;
  }
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var randomDecimal1 = Math.random() * 6; //0-0.9999... * 6
  var randomDice1 = Math.floor(randomDecimal1) + 1; // example: 5.8989 -> 5 then plus 1

  var randomDecimal2 = Math.random() * 6; //0-0.9999... * 6
  var randomDice2 = Math.floor(randomDecimal2) + 1; // example: 5.8989 -> 5 then plus 1

  var myOutputValue = `you lose. your guess: ${input}, dice roll was ${randomDice1}, ${randomDice2}, condition was ${randomX}`;

  //at start of round, choose random number of times a player need to win in a row.
  if (round == true) {
    var randomNumber = Math.random() * 3;
    randomX = Math.floor(randomNumber) + 1;
    round = false; //set to false so that throughout the round it will not run this block again
  }

  if (
    (input > randomDice1 - randomX && input < randomDice1 + randomX) ||
    (input > randomDice2 - randomX && input < randomDice2 + randomX)
  ) {
    myOutputValue = `you won. your guess: ${input}, dice roll was ${randomDice1}, ${randomDice2}, condition was ${randomX}`;
    round = true;
  }
  return myOutputValue;
};

var myOutputValue = "roll dice";
var round = "dice";
var numOfCorrectGuesses = 0;

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  if (round == "dice") {
    myOutputValue = "you lose roll again";
    var randomDecimal1 = Math.random() * 6; //0-0.9999... * 6
    var randomDice1 = Math.floor(randomDecimal1) + 1; // example: \
    if (input == randomDice1) {
      numOfCorrectGuesses += 1;
      if (numOfCorrectGuesses == 2) {
        numOfCorrectGuesses = 0; //reset correct guess count back to 0
        round = "4d";
        myOutputValue = "You won the dice game, input a 4Digit number";
      } else {
        myOutputValue = "1 more to go";
      }
    }
  } else if (round == "4d") {
    myOutputValue = "You lose";
    var decimal1 = Math.random() * 10;
    var digit1 = Math.floor(decimal1);
    var decimal2 = Math.random() * 10;
    var digit2 = Math.floor(decimal2);
    var decimal3 = Math.random() * 10;
    var digit3 = Math.floor(decimal3);
    var decimal4 = Math.random() * 10;
    var digit4 = Math.floor(decimal4);
    var resulting4Digit = digit1 * 1000 + digit2 * 100 + digit3 * 10 + digit4;
    if (resulting4Digit - 1000 < input && input < resulting4Digit + 1000) {
      myOutputValue = "You won the 4D game, input a Dice number";
      round = "dice";
    }
  }

  return myOutputValue;
};

var prevWord = "";

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var wordList = ["banana", "chisel", "faucet"];
  //Generate random chosen word
  var randomNum = Math.random() * 3;
  var randomDig = Math.floor(randomNum);
  var chosenWord = wordList[randomDig];

  //how many correct guesses the player still needs until she wins.
  var myOutputValue = "Two more words to go";

  if (input == chosenWord) {
    if (input != prevWord) {
      numOfCorrectGuesses += 1;
      previousOutcome = true;
      prevWord = chosenWord;
      myOutputValue = `One more word to go. Your guessed ${input}. The secret Word is ${chosenWord}`;
      if (numOfCorrectGuesses == 2) {
        // output all information such as the guessed word, the secret word.
        myOutputValue = `You win! Your guessed word: ${input}, The secret Word is ${chosenWord}`;
        numOfCorrectGuesses = 0; //reset correct guess count back to 0
        guessWords = []; //reset list to empty
        previousOutcome = false;
      }
    }
  } else {
    if (previousOutcome == true) {
      numOfCorrectGuesses = 0; //reset correct guess count back to 0
      guessWords = []; //reset list to empty
      previousOutcome = false;
      myOutputValue = "Two more words to go";
    }
  }
  return myOutputValue;
};
