let rl = require('readline-sync');

const WINNING_SCORE = 21;
const DEALER_BREAKPOINT = 17;

function initializeDeck() {
  let suits = ['H', 'D', 'S', 'C'];
  let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  let deck = [];
  suits.forEach(suit => {
    cards.forEach(value => deck.push([suit, value]));
  });
  return deck;
}

function prompt(message) {
  console.log(`=> ${message}`);
}


function shuffle(array) {
  let shuffledCards = array.slice();
  for (let index = shuffledCards.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [shuffledCards[index], shuffledCards[otherIndex]]
      = [shuffledCards[otherIndex], shuffledCards[index]];
  }
  return shuffledCards;
}

function dealHand(shuffledDeck) {
  let hand = [];
  hand.push(shuffledDeck.pop());
  hand.push(shuffledDeck.pop());
  return hand;
}

function hit(playerHand, shuffledDeck) {
  playerHand.push(shuffledDeck.pop());
}

function displayDealerHand(dealerHand) {
  prompt(`Dealer has: ${dealerHand[0][1]} and an unknown card`);
}

function displayEndGameHands(playerHand, dealerHand) {
  console.log('');
  console.log('====================='.repeat(2) + '\n');
  prompt(`Dealer has: ${listCards(dealerHand)} with a total of ${handTotal(dealerHand)}.`);
  prompt(`Player has: ${listCards(playerHand)} with a total of ${handTotal(playerHand)}.`);
  console.log('');
}

function displayPlayerHand(playerHand, handTotal) {
  prompt(`You have: ${listCards(playerHand)}`);
  prompt(`Your total is: ${handTotal}`);
}

function listCards(hand) {
  let handString = '';
  if (hand.length > 2) {
    for (let idx = 0; idx < hand.length - 1; idx++) {
      handString += hand[idx][1] + ', ';
    }
    return handString + 'and ' + hand[hand.length - 1][1];
  } else {
    return `${hand[0][1]} and ${hand[1][1]}`;
  }
}

function handTotal(hand) {
  let values = hand.map(card => card[1]);
  let sum = 0;

  values.forEach(value => {
    if (value === 'Ace') {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'Ace').forEach(_ => {
    if (sum > WINNING_SCORE) sum -= 10;
  });

  return sum;
}

function busted(handTotal) {
  return handTotal > WINNING_SCORE;
}

function dealerTurn(dealerHand, shuffledDeck,dealerTotal) {
  let sum = dealerTotal;
  while (sum < DEALER_BREAKPOINT) {
    dealerHand.push(shuffledDeck.pop());
    sum = handTotal(dealerHand);
  }
  return sum;
}

function chooseWinner(playerTotal, dealerTotal) {
  if (busted(playerTotal)) {
    return 'player_busted';
  } else if ((busted(dealerTotal))) {
    return 'dealer_busted';
  } else if (playerTotal === dealerTotal) {
    return 'tie';
  } else if (playerTotal > dealerTotal) {
    return 'player';
  } else {
    return 'dealer';
  }
}

function displayResult(playerTotal, dealerTotal) {
  let result = chooseWinner(playerTotal, dealerTotal);

  switch (result) {
    case 'player_busted':
      prompt('You busted! Dealer wins!');
      break;
    case 'dealer_busted':
      prompt('Dealer busted! You win!');
      break;
    case 'player':
      prompt('You win!');
      break;
    case 'dealer':
      prompt('Dealer Wins!');
      break;
    case 'tie':
      prompt('The game ends in a tie');
      break;
  }
}

function getYesOrNo() {
  console.log('');
  prompt('Play again? (y or n)');
  let answer = rl.question().toLowerCase().trim();

  while (!['y', 'n'].includes(answer)) {
    prompt("Please enter 'y' or 'n'." );
    answer = rl.question().toLowerCase().trim();
  }
  return answer;
}

// MAIN PROGRAM

let cards = initializeDeck();

prompt('Welcome to Twenty-One!\n');
console.log('====================='.repeat(2) + '\n');

while (true) {
  let shuffledDeck = shuffle(cards);

  let playerHand = dealHand(shuffledDeck);
  let dealerHand = dealHand(shuffledDeck);
  let playerTotal = handTotal(playerHand);
  let dealerTotal = handTotal(dealerHand);

  //GAME LOOP
  while (true) {

    // PLAYER'S TURN
    while (true) {
      displayDealerHand(dealerHand);
      displayPlayerHand(playerHand, playerTotal);

      prompt("Hit or stay? Enter 'h' or 's'. ");
      let hitOrStay = rl.question();
      while (!['h', 's'].includes(hitOrStay)) {
        prompt("Please enter 'h' or 's'.");
        hitOrStay = rl.question();
      }

      if (hitOrStay === 'h') {
        hit(playerHand, shuffledDeck);
        playerTotal = handTotal(playerHand);
        prompt(`You chose to hit${busted(playerTotal) ? ' and busted' : ''}!\n`);
      }

      if (hitOrStay === 's' || busted(playerTotal)) break;

    }

    // END OF PLAYER'S TURN
    if (busted(playerTotal)) {
      break;
    } else {
      prompt('You choose to stay\n');
    }

    // DEALER'S TURN
    dealerTotal = dealerTurn(dealerHand, shuffledDeck, dealerTotal);

    // END OF DEALER'S TURN
    if (busted(dealerTotal)) {
      break;
    } else {
      prompt(`The dealer chose to stay with a total of ${dealerTotal}`);
      break;
    }

  }

  displayEndGameHands(playerHand, dealerHand);
  displayResult(playerTotal, dealerTotal);


  let answer = getYesOrNo();
  console.clear();
  if (answer !== 'y') break;
}
