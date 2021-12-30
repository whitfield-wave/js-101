function maxRotation(number) {
  let numArr = String(number).split('');
  for (let index = 0; index < numArr.length; index++) {
    let rotatedDigit = numArr.splice(index, 1);
    numArr.push(rotatedDigit[0]);
  }
  return Number(numArr.join(''));
}