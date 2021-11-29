// ask user for bill
// ask user for tip rate
// compute tip
// log tip and bill total to console

let readline = require('readline-sync');

console.log('What is the bill?');
let bill = readline.prompt();
bill = parseFloat(bill);

console.log('What is the tip percentage?');
let tipPercentage = readline.prompt();
tipPercentage = parseFloat(tipPercentage);

let tip = bill * (tipPercentage / 100);
let totalBill = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}.`)
console.log(`The total bill is $${totalBill.toFixed(2)}.`);