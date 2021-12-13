function alphanumeric(string) {
  let regex = /^[a-z0-9]+$/g;
  return regex.test(string)
}
function isRealPalindrome(word) {
  let wordArray = word.toLowerCase().split('').filter(alphanumeric);
  word = wordArray.join('');
  let reverseWord = wordArray.reverse().join('');
  return reverseWord === word;
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));