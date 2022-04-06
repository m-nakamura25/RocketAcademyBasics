var findAngleBtwEachNum = function () {
  // Find the angle between each number on a clock.
  var totalDegreesOnClock = 360;
  var totalNumbersOnClock = 12;
  var angleBtwEachNumber = totalDegreesOnClock / totalNumbersOnClock;

  console.log("angle between each number: " + angleBtwEachNumber);

  return angleBtwEachNumber;
};

var calcAngleOfMinHand = function (minsPastOne) {
  var angleBtwEachNumber = findAngleBtwEachNum();

  // Convert minutes to number on clock
  var numMinHandPointsTo = minsPastOne / 5;

  console.log("number the minute hand is pointing to: " + numMinHandPointsTo);

  // Find the angle of the minute hand given the number of minutes past 1pm.
  var angleOfMinHand = angleBtwEachNumber * numMinHandPointsTo;

  console.log("angle of minute hand: " + angleOfMinHand);

  return angleOfMinHand;
};

var calcAngleBtwClockHands = function (angleOfMinHand) {
  var angleBtwEachNumber = findAngleBtwEachNum();
  var hour = 1;

  // Find the angle of the hour hand.
  var angleOfHourHand = angleBtwEachNumber * hour;

  console.log("angle of hour hand is: " + angleOfHourHand);

  // Find the angle between the minute hand and the hour hand.
  var angleBtwClockHands = angleOfMinHand - angleOfHourHand;

  console.log(
    "the result of subtracting the angle of the hour hand from the angle of the minute hand is: " +
      angleBtwClockHands
  );

  // Make it an absolute value.
  angleBtwClockHands = Math.abs(angleBtwClockHands);

  console.log(
    "the (absolute value of the) angle between the clock hands is: " +
      angleBtwClockHands
  );

  return angleBtwClockHands;
};

var main = function (input) {
  var minsPastOne = input;

  var angleOfMinHand = calcAngleOfMinHand(minsPastOne);
  var angleBtwClockHands = calcAngleBtwClockHands(angleOfMinHand);

  var myOutputValue =
    "When it is " +
    minsPastOne +
    " minutes past 1pm, the angle between the hour and minute hand will be " +
    angleBtwClockHands +
    " degrees. ";

  return myOutputValue;
};

var computeNeededTrainSpeed = function (delayedHours) {
  // Train 1 is traveling 200kph and will reach Tokyo in 2 hours. So the distance to Tokyo is 400km.
  // Speed = distance / time
  // Therefore, Train 2's needed speed is 400km divided by the time alloted to it
  // (which is 2 hours minus the time it is delayed).

  var neededTrainSpeed = 400 / (2 - delayedHours);

  return neededTrainSpeed;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var computeAreaOfCircle = function () {
  var pi = 3.14;
  var radius = 4;
  var area = pi * radius * radius;

  console.log("the area of the circle is " + area);

  return area;
};

var repeatTheInput = function (input) {
  console.log("1" + input);
  console.log("2" + input);
  console.log("8" + input);
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
