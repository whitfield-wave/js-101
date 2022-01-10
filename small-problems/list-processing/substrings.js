// input string
// output all substrings of the string, starting with all letters of the string

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

