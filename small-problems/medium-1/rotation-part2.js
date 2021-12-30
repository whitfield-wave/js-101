// input: int AND a count of which digits to rotate.
// output: int after rotation. 

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917


// of the count number of digits, rotate the first to the end. 
// (735291, 3) means 291 is isolated. 
    // 2 is stuck to the end
    // the rest of the numbers are slid together 735912


// data struture: strings and arrays
// convert to string and then an array
// splice out digit from array.length - count place.
//concat to end 
// join and then coerce to number type

function rotateRightmostDigits(number, count) {
    let numArr = String(number).split('');
    let rotatedDigit = numArr.splice(numArr.length - count, 1);
    return Number(numArr.concat(rotatedDigit).join(''));

}
