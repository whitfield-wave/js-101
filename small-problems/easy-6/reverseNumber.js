function reverseNumber(num) {
  let reversedNumStr = String(num).split('').reverse().join('');
  return Number(reversedNumStr);
}