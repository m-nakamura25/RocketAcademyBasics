// =====================================
// ======= GLOBAL VARIABLES =============
// =====================================

var mode = "showing first cards"; //will change to "cards shown"
var playerStand = false;

var playerSum = 0;
var dealerSum = 0;
var playerHand = [];
var dealerHand = [];

//set default result
var result = `Please enter "hit" or "stand" and then press Submit.`;

// =====================================
// ========= HELPER FUNCTIONS =============
// =====================================

//make a deck
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;
      var adjustedRank = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
        adjustedRank = 10;
      } else if (cardName == 12) {
        cardName = "queen";
        adjustedRank = 10;
      } else if (cardName == 13) {
        cardName = "king";
        adjustedRank = 10;
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: adjustedRank
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

//get random index
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

//helper function to determine if there's a blackjack
var analyzeBlackjack = function (
  dealerCard1,
  dealerCard2,
  playerCard1,
  playerCard2
) {
  if (
    ((dealerCard1.rank === 10 && dealerCard2.rank === 1) ||
      (dealerCard1.rank === 1 && dealerCard2.rank === 10)) &&
    ((playerCard1.rank === 10 && playerCard2.rank === 1) ||
      (playerCard1.rank === 1 && playerCard2.rank === 10))
  ) {
    result =
      "Both dealer and player got blackjack. Both win. Refresh the page to play again.";
    mode = "end game";
  } else if (
    (dealerCard1.rank === 10 && dealerCard2.rank === 1) ||
    (dealerCard1.rank === 1 && dealerCard2.rank === 10)
  ) {
    result =
      "Dealer got blackjack. Dealer wins! Refresh the page to play again.";
    mode = "end game";
  } else if (
    (playerCard1.rank === 10 && playerCard2.rank === 1) ||
    (playerCard1.rank === 1 && playerCard2.rank === 10)
  ) {
    result =
      "Player got blackjack. Player wins! Refresh the page to play again.";
    mode = "end game";
  }

  return result;
};

var determineAceValueAndNewSum = function (hand, sum) {
  //can just focus on 1 player's hand at a time
  //either playerHand[x, x, x] or dealerHand[x, x, x...]

  var aceExists = false;
  var handSum = sum;

  //check if there's an ace in the hand
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].rank == 1) {
      //if an ace exists in the hand, then do the following.
      //if no ace exists in the hand, then the hand stays the same.
      aceExists = true;
    }
  }

  if (aceExists == true) {
    //find the sum if 1 ace card has value 11
    //You would never want to make 2 ace cards have value 11, because that alone would make you bust.
    handSum += 10;

    //if it busts, then the aceValue goes back to 1.
    //if it doesn't bust, then the aceValue should stay 11.
    if (handSum > 21) {
      handSum -= 10;
    }
  }

  return handSum;
};

var displayHands = function () {
  //both playerHand and dealerHand are global variables, so no need to pass them when calling the function
  var playerMessage = "Player had: <br>";
  var dealerMessage = "Dealer had: <br>";

  //loop to get each card for player and then for dealer.
  for (var i = 0; i < playerHand.length; i++) {
    var currentPlayerCard = playerHand[i];
    playerMessage += `- ${currentPlayerCard.name} of ${currentPlayerCard.suit}<br>`;
  }
  for (var i = 0; i < dealerHand.length; i++) {
    var currentDealerCard = dealerHand[i];
    dealerMessage += `- ${currentDealerCard.name} of ${currentDealerCard.suit}<br>`;
  }

  var handsOutput = playerMessage + "<br>" + dealerMessage + "<br>";

  return handsOutput;
};

// =====================================
// ========= MAIN FUNCTION =============
// =====================================

var main = function (input) {
  var deck = makeDeck();
  var shuffledDeck = shuffleCards(deck);

  //FIRST CLICK
  if (mode === "showing first cards") {
    // Each player draws 2 cards from the top of the deck
    var dealerCard1 = shuffledDeck.pop();
    var playerCard1 = shuffledDeck.pop();
    var dealerCard2 = shuffledDeck.pop();
    var playerCard2 = shuffledDeck.pop();

    //push to arrays
    playerHand.push(playerCard1, playerCard2);
    dealerHand.push(dealerCard1, dealerCard2);
    console.log("playerHand", playerHand);
    console.log("dealerHand", dealerHand);

    playerSum = playerCard1.rank + playerCard2.rank;
    dealerSum = dealerCard1.rank + dealerCard2.rank;
    console.log(
      "playerCard1.rank",
      playerCard1.rank,
      "playerCard2.rank",
      playerCard2.rank
    );
    console.log("playerSum", playerSum);
    console.log("dealerSum", dealerSum);

    mode = "cards shown";

    //analyze if there's a blackjack
    result = analyzeBlackjack(
      dealerCard1,
      dealerCard2,
      playerCard1,
      playerCard2
    );

    var myOutputValue = displayHands() + `${result} <br>`;

    return myOutputValue; //early return
  }

  //SECOND CLICK

  //if mode has changed from "showing first result", will come here.
  console.log("mode", mode);

  if (playerStand === false) {
    if (input === "hit") {
      //add a card to player's hand

      var playerHitCard = shuffledDeck.pop();
      playerSum += playerHitCard.rank;
      playerHand.push(playerHitCard);

      console.log("after Hit, playerSum", playerSum);
      result = `You drew another card. Plesae input "hit" or "stand."`;

      // If player busted, tell the user so and let the dealer play on next click.
      if (playerSum > 21) {
        result = "Player busted! Dealer will play now. Press Submit.";
        playerStand = true;
      }
    } else if (input === "stand") {
      playerStand = true;
      result = "You chose stand. Dealer will play now. Press Submit.";
    } else if (mode === "end game") {
      result = "Refresh the page to play again.";
    } else {
      result = `Wrong input... Please enter "hit" or "stand."`;
    }

    var myOutputValue = displayHands() + `${result} <br>`;

    return myOutputValue; //early return
  }

  //once user is done hitting, dealer plays.

  //dealer's choice (must hit if 16 or under, must stand if 17 or over)
  if (playerStand === true) {
    if (dealerSum <= 16) {
      var dealerCard3 = shuffledDeck.pop();
      dealerSum += dealerCard3.rank;
      dealerHand.push(dealerCard3);
    }
  }

  //now that player and dealer are both done playing, determine who wins.

  //Before going through winning conditions, Analyze if ace should be counted as 11
  var playerNewSum = determineAceValueAndNewSum(playerHand, playerSum);
  var dealerNewSum = determineAceValueAndNewSum(dealerHand, dealerSum);

  console.log("playerNewSum", playerNewSum);
  console.log("dealerNewSum", dealerNewSum);

  //analyze cards for winning/losing conditions (busting, who's closer to 21)

  //busting
  if (playerNewSum > 21 && dealerNewSum > 21) {
    result = "Both dealer and player lost by busting!";
  } else if (playerNewSum > 21) {
    result = "Player loses by busting!";
  } else if (dealerNewSum > 21) {
    result = "Dealer loses by busting!";
  }

  //determine who's closer to 21
  else if (dealerNewSum > playerNewSum) {
    result = "Dealer wins.";
  } else if (dealerNewSum < playerNewSum) {
    result = "Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    result = "It's a tie.";
  }

  result += " Refresh the page to play again.";

  if (mode === "end game") {
    result = "Refresh the page to play again. ";
  }

  mode = "end game";

  var myOutputValue = displayHands() + `${result} <br>`;

  return myOutputValue;
};
