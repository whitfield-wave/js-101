function doubleNumbers(numbers, factor) {
  let doubledNumbers = [];
  let counter = 0;
  while (counter < numbers.length) {
    let doubled = numbers[counter] * factor;
    doubledNumbers.push(doubled);
    counter += 1;
  }
  return doubledNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers, 2)); // => [2, 8, 6, 14, 4, 12]
myNumbers;