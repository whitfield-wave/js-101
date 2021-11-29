function utf16Value(str) {
  let value = 0;
  for (let i = 0; i <= str.length -1; i++) {
    value += str.charCodeAt(i);
  }
  return value;
}

