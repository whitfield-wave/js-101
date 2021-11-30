function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let reverseString = [];
  do {
    reverseString.push(DIGITS[num % 10]);
    num = (num - (num % 10)) / 10;
  } while (num !== 0);
  let string = reverseString.reverse().join(''); // could just be DIGITS[num%10] + string. No need to reverse and join.
  return string;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"