function factors(number) {
  let factors = [];
  for (let divisor = number; divisor > 0; divisor -= 1) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }
  return factors;
}

console.log(factors(5));
console.log(factors(0));