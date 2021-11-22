// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readLine = require('readline-sync');
const MESSAGES = require('./calculator-messages.json');

prompt('Please select a language: English (en) or Deutsch (de)');
const LANGUAGE = readLine.question();

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function messages(message) {
  return MESSAGES[LANGUAGE][message];
}

prompt(messages('welcome'));
let cont = true;

while (cont === true) {
  prompt(messages('firstNum'));
  let number1 = readLine.question();

  while (invalidNumber(number1)) {
    prompt(messages('validNum'));
    number1 = readLine.question();
  }
  prompt(messages('secondNum'));
  let number2 = readLine.question();

  while (invalidNumber(number2)) {
    prompt(messages('validNum'));
    number2 = readLine.question();
  }

  prompt(messages('operation'));
  let operation = readLine.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('invOperation'));
    operation = readLine.question();
  }


  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      while (Number(number2) === 0) {
        prompt(messages('divByZero'));
        number2 = readLine.question();
      }
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`${messages('result')} ${output}!`);
  prompt(messages('repeat'));
  let answer = readLine.question();

  //if (answer !== 'y') break;
  cont = answer.startsWith('y');
  if (cont) console.clear();
}