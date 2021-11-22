// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readLine = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

let cont = true;
console.log('Welcome to the Calculator!');
while (cont === true) {
  prompt('What is the first number?');
  let number1 = readLine.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readLine.question();
  }
  prompt('What is the second number?');
  let number2 = readLine.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readLine.question();
  }

  prompt("What operation would you like to perfrom?:\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = readLine.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4.');
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
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is ${output}!`);
  prompt('Do you want to perform another operation  y/n?');
  let answer = readLine.question();

  //if (answer !== 'y') break;
  if (answer.startsWith('y')) {
    cont = true;
  } else if (answer.startsWith('n')) {
    cont = false;
  }
}