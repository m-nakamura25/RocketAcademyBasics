//user inputs adjectives. Adj will be in array
var inputAdjective = [];

//generate random adjective choice
var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  if (input == "create") {
    var randomIndex = getRandomIndex(inputAdjective.length);
    var randomAdj = inputAdjective[randomIndex];

    var madLib =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdj +
      " wife.";
    return madLib;
  } else {
    //input string of words & split
    let stringAdjective = input;
    var myArray = stringAdjective.split(" ");

    // inputAdjective.push(input);

    var index = 0;
    while (index < myArray.length) {
      inputAdjective.push(myArray[index]);
      index += 1;
    }
  }
  console.log(inputAdjective);
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
