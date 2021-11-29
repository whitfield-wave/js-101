// ask user for dimensions of room in meters
//calculate area by multiplying dimensions
//calculate area in feet
// diplay to console

let readline = require('readline-sync');
let SQ_M_TO_SQ_F = 10.7639;

console.log('Enter the length of the room in meters:');
let length = readline.question();
length = parseInt(length, 10);

console.log('Enter the width of the room in meters:');
let width = readline.question();
width = parseInt(width, 10);


let areaInM = length * width;
let areaInF = areaInM * SQ_M_TO_SQ_F;

console.log(`The area of the room is ${areaInM.toFixed(2)} square meters (${areaInF.toFixed(2)} square feet). `);