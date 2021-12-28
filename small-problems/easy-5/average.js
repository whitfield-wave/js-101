function average(array) {
  let sum = array.reduce((prev, curr) => prev + curr);
  return Math.floor(sum / array.length);
}