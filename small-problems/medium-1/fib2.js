function fibonacci(num) {
  let sum1 = 1;
  let sum2 = 1;
  let fib = 0;

  if (num <= 2) {
    return 1;
  }
  for (let count = 3; count <= num; count++) {
    fib = sum1 + sum2;
    sum1 = sum2;
    sum2 = fib;
  }
  return fib;
}