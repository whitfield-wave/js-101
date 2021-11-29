const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors','lizard','spock'];
const VALID_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock' ],
  spock: ['rock', 'scissors']
};

function prompt(message) {
  console.log(`=> ${message}`);
}



function isPlayerWinner(choice, computerChoice) {
  return VALID_MOVES[choice].includes(computerChoice);
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

function keepScore(scores, choice, computerChoice) {
  if (isPlayerWinner(choice, computerChoice)) {
    scores.player += 1;
  } else {
    scores.computer += 1;
  }
}

function displayScoreToWin(scoreToWin) {
  prompt(`The score to win is ${scoreToWin}.`);
}

function displayScore(scores) {
  console.log('\n');
  prompt(`The scores are Player: ${scores.player}     Computer: ${scores.computer}\n`);
}

function getScoreToWin() {
  prompt('What score would you like to play to? Please pick a number from 1 to 5.');
  let answer = readline.question();
  while (Number.isNaN(Number(answer)) ||
    (Number(answer) < 1 || Number(answer) > 5)) {
    prompt('Please pick a number from 1 to 5.');
    answer = readline.question();
  }
  return Number(answer);
}

function getYesOrNo() {
  let input = readline.question().toLowerCase();
  while (input !== 'n' && input !== 'y') {
    prompt('Please enter "y" or "n".');
    input = readline.question().toLowerCase();
  }
  return input;
}

let currentScore = {player: 0, computer: 0};

let scoreToWin = getScoreToWin();

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
  if (choice !== computerChoice) {
    keepScore(currentScore, choice, computerChoice);
  }
  displayScore(currentScore);
  displayScoreToWin(scoreToWin);

  if (currentScore.player === Number(scoreToWin) ||
      currentScore.computer === Number(scoreToWin)) {
    prompt(currentScore.player > currentScore.computer ? 'The player wins the game!\n' : 'The computer wins the game!\n');

    // resetting the scores.
    currentScore.player = 0;
    currentScore.computer = 0;

    prompt('Do you want to play again (y/n?)');
    let answer = getYesOrNo();
    if (answer[0] !== 'y') {
      console.clear();
      break;
    }

    prompt('Do you want to change the winning score (y/n)?');
    let scoreChange = getYesOrNo();
    if (scoreChange[0] === 'y') scoreToWin = getScoreToWin();

    console.clear();
  }
}