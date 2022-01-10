function leadingSubstrings(string) {
  let substringArr = [];
  for (let idx = 0; idx < string.length; idx++) {
    substringArr.push(string.slice(0, idx + 1));
  }
  return substringArr;
}