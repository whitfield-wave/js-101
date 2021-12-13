function logInBox(word) {
  const line = '-';
  const corner = '+';
  const border = '|';
  const length = word.length;
  console.log(corner + line.repeat(word.length + 2) + corner);
  console.log(`${border}${' '.repeat(word.length + 2)}${border}`)
  console.log(`${border} ${word} ${border}`);
  console.log(`${border}${' '.repeat(word.length + 2)}${border}`)
  console.log(corner + line.repeat(word.length + 2) + corner);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
