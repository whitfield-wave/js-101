function sumSquareDifference(count) {
  let series = [];

  for (let i = 1; i <= count; i++) {
    series.push(i);
  }

  return squareOfSum(series) - sumOfSquares(series);

  function squareOfSum(range) {
    let sum = range.slice().reduce((prev, curr) => prev + curr);
    return Math.pow(sum, 2);
  }

  function sumOfSquares(range) {
    let sum = 0;
    range.forEach(num => sum += Math.pow(num, 2));
    return sum;
  }
}