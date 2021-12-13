const readline = require('readline-sync');

let answers = {};

answers.noun = readline.question('Enter a noun: ');
answers.verb = readline.question('Enter a verb: ');
answers.adjective = readline.question('Enter an adjective: ');
answers.adverb = readline.question('Enter an adverb: ');


function madlibs(object) {
console.log(`Do you ${answers.verb} your ${answers.adjective} ${answers.noun} ${answers.adverb}?`)
console.log(`The big ${answers.adjective} ${answers.noun} might just ${answers.verb} you too!`)
}

madlibs(answers);