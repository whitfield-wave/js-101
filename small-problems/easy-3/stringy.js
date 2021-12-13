function stringy(num) {
  let counter = 0;
  let final = "";
  while (counter < num) {
    final += '1';
    counter += 1;
    if (counter < num) {
      final += '0';
      counter += 1;
    }
  }
  return final;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"