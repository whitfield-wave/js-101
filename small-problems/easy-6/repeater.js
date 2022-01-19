// input is a string
// output is a string with every character doubled

// create an empty result string
// iterate through the input string
// add two of each letter at each iteration
// return the result string

function repeater(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    result += string[idx].repeat(2);
  };
  return result;
}
