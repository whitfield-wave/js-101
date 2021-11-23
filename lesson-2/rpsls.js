const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors','lizard','spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}



function isPlayerWinner(choice, computerChoice) {
  return ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')));
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice} and the computer chose ${computerChoice}.`);

  if (choice === computerChoice) {
    prompt("It's a tie!");
  } else if (isPlayerWinner(choice, computerChoice))  {
    prompt('You win!');
  } else {
    prompt('The Computer wins!');
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}:`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n?)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  console.clear();
  if (answer[0] !== 'y') break;
}