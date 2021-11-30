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

function signedIntegerToString(num) {
  let sign = Math.sign(num);
  switch (sign) {
    case 1:
      return '+' + integerToString(num);
      break;
    case -1:
      return '-' + integerToString(Math.abs(num));
      break;
    default:
      return integerToString(num);
      break;
  }
}
console.log(integerToString(-20));
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0) === "0");