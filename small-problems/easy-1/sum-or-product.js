let readline = require('readline-sync');

function listOfInts(max) {
  let ints = [];
  for (let i = 1; i <= max; i += 1) {
    ints.push(i);
  }
  return ints;
}

function product(nums) {
  let product = 1;
  nums.forEach(int => product *= int)
  return product;
}
function sum(nums) {
  let sum = 0;
  nums.forEach(int => sum += int)
  return sum;
}

let int = parseInt(readline.question('Please enter an integer greater than 0:'),10);
let answer = readline.question('Enter "s" to compute the sum, or "p" to compute the product.')

let ints = listOfInts(int);
let result = 0;

if (answer === 's') {
  result = sum(ints);
  console.log(`The sum of the integers between 1 and ${int} is ${result}.`);
} else {
  result = product(ints);
  console.log(`The product of the integers between 1 and ${int} is ${result}.`);
}

// for some reason I used an array to calculate the sum and product. Definitely not necessary, but I will leave this as written
// as a reminder.


