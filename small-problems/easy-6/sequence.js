// input is a positive integer
// output is an array of numbers counting up from 1 to the input inclusive

function sequence(num) {
  let arr = [];
  for (let count = 1; count <= num; count++) {
    arr.push(count);
  }
  return arr;
}