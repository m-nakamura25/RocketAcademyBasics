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

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
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

var followObjectsMain = function (input) {
  // Attempt the Follow Along exercise from the Objects module below with followObjectsMain as the main function.

  //define shuffled deck
  var shuffledDeck = shuffleCards(deck);

  // Draw 2 cards from the top of the deck
  var computerCard = shuffledDeck.pop();
  var playerCard = shuffledDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var myOutputValue =
    "Computer had " +
    computerCard.name +
    " of " +
    computerCard.suit +
    ". Player had " +
    playerCard.name +
    " of " +
    playerCard.suit +
    ". ";

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  if (computerCard.rank > playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.";
    // Else if computer card rank is less than player card rank, player wins
  } else if (computerCard.rank < playerCard.rank) {
    myOutputValue = myOutputValue + "Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }

  // Return the fully-constructed output string
  return myOutputValue;
};

var highestCardsMain = function (input) {
  // Attempt the Highest of 2 Cards exercise from the Objects module below with highestCardsMain as the main function.

  //define shuffled deck
  var deck = makeDeck();
  var shuffledDeck = shuffleCards(deck);

  // Each player draws 2 cards from the top of the deck
  var computerCard1 = shuffledDeck.pop();
  var playerCard1 = shuffledDeck.pop();
  var computerCard2 = shuffledDeck.pop();
  var playerCard2 = shuffledDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var myOutputValue =
    "Computer had " +
    computerCard1.name +
    " of " +
    computerCard1.suit +
    " and " +
    computerCard2.name +
    " of " +
    computerCard2.suit +
    ". Player had " +
    playerCard1.name +
    " of " +
    playerCard1.suit +
    " and " +
    playerCard2.name +
    " of " +
    playerCard2.suit +
    ". ";

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  if (
    (computerCard1.rank > playerCard1.rank &&
      computerCard1.rank > playerCard2.rank) ||
    (computerCard2.rank > playerCard1.rank &&
      computerCard2.rank > playerCard2.rank)
  ) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.";
    // Else if computer card rank is less than player card rank, player wins
  } else if (
    (playerCard1.rank > computerCard1.rank &&
      playerCard1.rank > computerCard2.rank) ||
    (playerCard2.rank > computerCard1.rank &&
      playerCard2.rank > computerCard2.rank)
  ) {
    myOutputValue = myOutputValue + "Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }

  // Return the fully-constructed output string
  return myOutputValue;
};

var followCreatingMain = function (input) {
  // Attempt the Follow Along exercise from the Creating Objects with Loops module below with followCreatingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
