function isPalindromicNumber(num) {
  let numString = String(num);
  let reversedNumString = numString.split('').reverse().join('');
  return numString === reversedNumString;
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));