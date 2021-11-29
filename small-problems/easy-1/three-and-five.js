// given max number and 3 and 5
// find all numbers between 1 and given that are divisbile by 3 or 5
//add them up

function multisum(num) {
  let sum = 0;
  for (let i = 3; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}