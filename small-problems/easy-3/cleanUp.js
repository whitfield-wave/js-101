function alphanumeric(string) {
  let regex = /^[a-z0-9]+$/g;
  return regex.test(string)
}
function cleanUp(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (!alphanumeric(string[i])) {
      if (result[result.length-1] !== ' ') {
        result += ' ';
      }
    } else {
      result += string[i];
    }
  }
  return `"${result}"`;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "