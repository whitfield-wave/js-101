function findFibonacciIndexByLength(num) {
  let counter = 7n;
  let lastNum = 8n;
  let fib = 13n;
  let length = 2n;

  while (length < num) {
    fib = fib + lastNum;
   lastNum = fib - lastNum;
   length = String(fib).length;
    counter += 1n;
  }
  return counter;
}

console.log(findFibonacciIndexByLength(10000n));