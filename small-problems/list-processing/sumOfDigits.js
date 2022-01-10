function sum(number) {
  return String(number).split('')
    .map(numStr => Number(numStr))
    .reduce((prev, curr) => prev + curr);
}