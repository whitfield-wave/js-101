const readline = require('readline-sync');
function getNumbers() {
  let numbers = [];
  console.log('Enter the 1st number:');
  numbers.push(Number(readline.prompt()));
  console.log('Enter the 2nd number:');
  numbers.push(Number(readline.prompt()));
  console.log('Enter the 3rd number:');
  numbers.push(Number(readline.prompt()));
  console.log('Enter the 4th number:');
  numbers.push(Number(readline.prompt()));
  console.log('Enter the 5th number:');
  numbers.push(Number(readline.prompt()));
  return numbers;
}

function getLastNumber() {
  console.log('Enter the last number:');
  return Number(readline.prompt());
}

function searching(series, lastNum) {
  if (series.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${series.join(', ')}.`);
  } else {
    console.log(`The number ${lastNum} does not appear in ${series.join(', ')}.`);
  }
}
searching(getNumbers(),getLastNumber());