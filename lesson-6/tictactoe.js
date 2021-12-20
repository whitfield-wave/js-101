const rl = require('readline-sync');
const INTIAL_MARKER = ' ';
const FIRST_PLAYER = 'choose';
const HUMAN_MARKER = 'X';
const COMP_MARKER = 'O';
const WINNING_SCORE = 3;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMP_MARKER}. First to ${WINNING_SCORE} wins.\n`);

  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INTIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INTIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = rl.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  if (detectThreat(board, COMP_MARKER, HUMAN_MARKER)) {
    board[detectThreat(board, COMP_MARKER, HUMAN_MARKER)] = COMP_MARKER;

  } else if (detectThreat(board,HUMAN_MARKER, COMP_MARKER)) {
    board[detectThreat(board, HUMAN_MARKER, COMP_MARKER)] = COMP_MARKER;

  } else if (board['5'] === ' ') {
    board['5'] = COMP_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    let square = emptySquares(board)[randomIndex];
    board[square] = COMP_MARKER;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMP_MARKER &&
      board[sq2] === COMP_MARKER &&
      board[sq3] === COMP_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function joinOr(arr, delimiter = ', ', conj = 'or') {
  if (arr.length < 2) {
    return arr.join('');

  } else if (arr.length === 2) {
    return arr.join(` ${conj} `);

  } else {
    return `${arr.slice(0, arr.length - 1)
      .join(delimiter)}${delimiter}${conj} ${arr[arr.length - 1]}.`;

  }
}

function gamePause(score) {
  if (!detectMatchWinner(score)) {
    console.log('');
    prompt('Press enter to start next game.');
    rl.question();
  }
}

function detectThreat(board, attacker, defender) {

  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    let boardLine = line.map(square => board[square]);

    if (!boardLine.includes(defender) && gamePointCheck(boardLine, attacker)) {
      let blankSpace = line.find(square => board[square] === INTIAL_MARKER);
      return blankSpace;
    }
  }

  return null;

}

function gamePointCheck(line, attacker) {

  return line.filter(square => square === attacker).length === 2;
}

function detectMatchWinner(score) {
  if (score.player === WINNING_SCORE) {
    return 'Player';
  } else if (score.computer === WINNING_SCORE) {
    return 'Computer';
  } else {
    return null;
  }
}

function displayScore(score) {
  prompt(`Scores -- Player: ${score.player}  Computer: ${score.computer}`);
}

function keepScore(score, board) {
  switch (detectWinner(board)) {
    case 'Player':
      score.player += 1;
      break;
    case 'Computer':
      score.computer += 1;
      break;
    default:
      break;
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function chooseFirstPlayer() {
  prompt('Who would you like to go first?');
  prompt('Enter "player" or "computer".');
  let answer = rl.question().trim();

  while (!['player', 'computer'].includes(answer)) {
    prompt("Sorry, that's not a valid choice.");
    answer = rl.question();
  }

  return answer;
}

function getYesOrNo() {
  prompt('Play again? (y or n)');
  let answer = rl.question().toLowerCase().trim();

  while (!['y', 'n'].includes(answer)) {
    prompt("Please enter 'y' or 'n'." );
    answer = rl.question().toLowerCase().trim();
  }
  return answer;
}

function playGame(board, currentPlayer, score) {
  while (true) {
    displayBoard(board);
    displayScore(score);

    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);

    if (someoneWon(board) || boardFull(board)) break;

  }
}

function displayGameWinner(board, score) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    keepScore(score, board);
    displayScore(score);
  } else {
    prompt("It's a tie!");
  }
}



// MAIN PROGRAM

while (true) {

  let score = {player: 0, computer: 0};
  let firstPlayerThisGame = FIRST_PLAYER === 'choose' ? chooseFirstPlayer(): FIRST_PLAYER;

  // match loop
  while (true) {
    let currentPlayer = firstPlayerThisGame;
    let board = initializeBoard();

    playGame(board, currentPlayer, score);

    displayBoard(board);

    displayGameWinner(board, score);
    gamePause(score);

    if (!!detectMatchWinner(score)) {
      prompt(`Congrats! ${detectMatchWinner(score)} has won the match.`);
      break;
    }
  }

  let answer = getYesOrNo();
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic-Tac-Toe!');