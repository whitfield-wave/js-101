const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retirement = Number(readline.question('At what age would you like to retire? '));

let today = new Date();
let year = today.getFullYear();

console.log(`\nIt's ${year}. You will retire in ${year + age}.`)
console.log(`You have only ${retirement - age} years of work to go!`)