var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "";

  var counter = 0; //initializer
  while (counter < input) {
    //condition
    myOutputValue += "👍";

    counter += 1; //counter incrementer
  }

  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";

  var outerCounter = 0; //initializer
  while (outerCounter < input) {
    var innerCounter = 0; //inner loop initializer
    while (innerCounter < input) {
      myOutputValue += "👍";
      innerCounter += 1; //inner counter incrementer
    }
    //condition
    myOutputValue += "<br>";

    outerCounter += 1; //outer counter incrementer
  }

  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";

  var outerCounter = 0; //initializer
  while (outerCounter < input) {
    var innerCounter = 0; //inner loop initializer
    while (innerCounter <= outerCounter) {
      myOutputValue += "👍";
      innerCounter += 1; //inner counter incrementer
    }
    //condition
    myOutputValue += "<br>";

    outerCounter += 1; //outer counter incrementer
  }

  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";

  var outerCounter = 0; //outer initializer
  while (outerCounter < input) {
    //outer condition
    var innerCounter = 0; //inner initializer
    while (innerCounter < input) {
      //inner condition

      if (
        outerCounter == 0 ||
        outerCounter == input - 1 ||
        innerCounter == 0 ||
        innerCounter == input - 1
      ) {
        myOutputValue += "✊";
      } else {
        myOutputValue += "👍";
      }

      innerCounter += 1; //inner counter incrementer
    }
    myOutputValue += "<br>";

    outerCounter += 1; //outer counter incrementer
  }

  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
