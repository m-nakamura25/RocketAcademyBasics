var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "";

  //Initialize the outer counter, rowCounter
  var rowCounter = 0;

  while (rowCounter < input) {
    //Inside outer loop, initialize the inner counter, columnCounter
    var columnCounter = 0;

    //Every time  outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
      //EAch time the inner loop runs, it adds "x" to output
      myOutputValue += "x";
      columnCounter += 1;
    }

    //At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue += "<br>";
    rowCounter += 1;
  }

  //After the outer loop has run to completion, return the output compiled by the above loops.

  return myOutputValue;
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = "";

  //Initialize the counter.
  var counter = 0;

  while (counter <= 6) {
    //Each time the loop runs, it adds "hello" to output.
    myOutputValue += "hello ";

    counter += 1;
  }

  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = "";

  //Initialize outer loop
  var outerCounter = 0;

  while (outerCounter < input) {
    //Within outer loop, initialize inner loop.
    var innerCounter = 0;

    //Every time inner loop runs, it adds hello.
    while (innerCounter < input * 2) {
      myOutputValue += "hello ";

      // add +1 to inner counter
      innerCounter += 1;
    }

    //Every time outer loop runs, it adds a newline.
    myOutputValue += "<br>";

    //add +1 to outer counter
    outerCounter += 1;
  }

  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.

  var myOutputValue = "";

  //Initialize outer loop
  var outerCounter = true;

  while (outerCounter) {
    //Within outer loop, initialize inner loop.
    var innerCounter = 0;

    //Every time inner loop runs, it adds hello.
    while (innerCounter < input * 2) {
      myOutputValue += "hello ";

      // add +1 to inner counter
      innerCounter += 1;
    }

    //Every time outer loop runs, it adds a newline.
    myOutputValue += "<br>";

    //add +1 to outer counter
    outerCounter += 1;
  }

  return myOutputValue;
};
