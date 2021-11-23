const readLine = require('readline-sync');
const MONTHS_IN_YEAR = 12;

function prompt(message) {
  console.log(`=> ${message}`);
}

function calcMonthly(principal, rate, months) {
  if (rate !== 0) {
    return principal * (rate / (1 - Math.pow((1 + rate), (-months))));
  } else {
    return principal / months;
  }
}
function isInvalidNumber(num) {
  return num.trim() === '' || Number(num) < 0 || Number.isNaN(Number(num));
}

function validRepeat(response) {
  return response.toLowerCase().startsWith('y') || response.toLowerCase().startsWith('n');
}

let repeat = true;

prompt('Welcome! This calculator calculates monthly payments and total cost of loans based on total loan amount, APR, and loan duration.');

do {
  prompt('How much in USD are you borrowing?');
  let loan = readLine.question();

  while (isInvalidNumber(loan)) {
    prompt('Please enter a valid positive number:');
    loan = readLine.question();
  }


  prompt('What is your APR percentage? (For example: 5%)');
  let apr = readLine.question();

  while (isInvalidNumber(apr)) {
    prompt('Please enter a valid positive number:');
    apr = readLine.question();
  }
  let interest = (Number(apr) / 100) / MONTHS_IN_YEAR;

  prompt('What is the duration of your loan? (Please enter whole years and then remaining months.)');
  prompt('Years: ');
  let years = readLine.question();

  while (isInvalidNumber(years)) {
    prompt('Please enter a valid positive number:');
    years = readLine.question();
  }

  prompt('Months: ');
  let months = readLine.question();

  while (isInvalidNumber(months)) {
    prompt('Please enter a valid positive number:');
    months = readLine.question();
  }

  let durationMonths = (Number(years) * MONTHS_IN_YEAR) + Number(months);

  let monthlyPayment = calcMonthly(loan, interest, durationMonths);

  let total = (monthlyPayment * durationMonths);

  prompt(`Your payment will be $${monthlyPayment.toFixed(2)}/month for a total of $${total.toFixed(2)} at the end of ${durationMonths.toFixed(0)} months.\n`);

  prompt('Would you like to calculate another loan? (y/n)');
  let answer = readLine.question();
  while (!(validRepeat(answer))) {
    prompt('Please enter y to continue or n to terminate program!');
    answer = readLine.question();
  }

  repeat = answer.startsWith('y');

  console.log('\n\n');
  console.clear();

} while (repeat);

prompt('Good luck with your loan!');
