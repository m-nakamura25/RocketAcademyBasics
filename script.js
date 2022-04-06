var main = function (input) {
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  //  var myOutputValue =
  //    distanceInKm + " kilometres is " + distanceInMiles + " miles.";
  var myOutputValue = `${distanceInKm} kilometres is ${distanceInMiles} miles.`;

  return myOutputValue;
};
