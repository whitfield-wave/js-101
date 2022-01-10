function palindromes(string) {
  let substringList = substrings(string);
  let palindromicSubstrings = [];

  substringList.forEach(substr => {
    if (isPalindrome(substr)) {
      palindromicSubstrings.push(substr);
    }
  });

  return palindromicSubstrings;

  function isPalindrome(string) {
    return string.length > 1 && string === string.split('').reverse().join('');
  }
}

function substrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx++) {
    result.push(leadingSubstrings(string.slice(idx, string.length)));
  }

  return result.flat();

  function leadingSubstrings(string) {
    let substringArr = [];
    for (let idx = 0; idx < string.length; idx++) {
      substringArr.push(string.slice(0, idx + 1));
    }
    return substringArr;
  }
}


