
function centerOf(string) {
  let length = string.length;
  let midChar = Math.floor(length / 2);

  if (length % 2 !== 0) {
    return string[midChar];
  } else {
    return string.slice(midChar - 1, midChar + 1);
  }
}