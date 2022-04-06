var fahrenheitToCelsiusMain = function (fahrenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var myOutputValue = ((fahrenheit - 32) * 5) / 9;
  return myOutputValue;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calcTotalFuelCost = function (tripLengthInMiles) {
  var fuelCost = 2.2;
  var fuelConsumption = 9;

  var totalFuelCost = (tripLengthInMiles / fuelConsumption) * fuelCost;
  return totalFuelCost;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.

  var tripLengthInMiles = convertKmToMiles(input);
  var totalFuelCost = calcTotalFuelCost(tripLengthInMiles);

  var myOutputValue = `A road trip of ${input} km will cost a total of $${totalFuelCost}.`;
  return myOutputValue;
};

//Road Trip Cost (Comfortable)

var calcTotalFuelCostForComfortable = function (
  tripLengthInMiles,
  costPerLitreOfFuel
) {
  var fuelConsumption = 9;

  var totalFuelCostTrain =
    (tripLengthInMiles / fuelConsumption) * costPerLitreOfFuel;
  return totalFuelCostTrain;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var costPerLitreOfFuel = 2;
  var distanceInMiles = convertKmToMiles(input);
  var totalFuelCostTrain = calcTotalFuelCostForComfortable(
    distanceInMiles,
    costPerLitreOfFuel
  );
  var totalFuelCost = calcTotalFuelCost(distanceInMiles);
  var totalSaving = totalFuelCost - totalFuelCostTrain;
  var myOutputValue = `A road trip of ${input} km will cost a total of $${totalSaving}.`;
  return myOutputValue;
};

var convertGramsToPounds = function (grams) {
  return grams * 0.0022;
};

var calcTotalWeightOfIceNeeded = function (totalNumberOfGuests) {
  var drinksPerGuest = 2;
  var iceCubesPerDrink = 4;
  var weightsIceCubesInGrams = 1.5;
  return (
    drinksPerGuest *
    iceCubesPerDrink *
    weightsIceCubesInGrams *
    totalNumberOfGuests
  );
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var totalWeightInGrams = calcTotalWeightOfIceNeeded(input);
  var totalWeightInPounds = convertGramsToPounds(totalWeightInGrams);
  var capacityPerHour = 5;

  var myOutputValue = totalWeightInPounds / capacityPerHour;
  return myOutputValue;
};

var beerOrderMain = function (numOfGuests) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.

  var numDaysInYear = 365;
  var numQuartersInYear = 4;
  var numDaysInQuarter = numDaysInYear / numQuartersInYear;

  var pintPerGuest = 2;
  var totalNumOfPints = numOfGuests * pintPerGuest * numDaysInQuarter;

  var numPintsInHalfBarrelKeg = 124;
  var totalNumOfHalfBarrelKegs = totalNumOfPints / numPintsInHalfBarrelKeg;

  var myOutputValue = totalNumOfHalfBarrelKegs;
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.

  var costPerPlan = 19.99;
  var numOfPlan = Math.ceil(input / 50);
  var totalCost = costPerPlan * numOfPlan;
  var costPerGB = totalCost / input;

  var myOutputValue = costPerGB;
  return myOutputValue;
};
