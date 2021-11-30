const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}



prompt('Enter the first number:')
let num1 = parseInt(readline.question());

prompt('Enter the second number:')
let num2 = parseInt(readline.question());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${(num1 / num2).toFixed()}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
