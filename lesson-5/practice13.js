let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function oddArraySum(arr) {
  return arr.slice().filter(num => num % 2 !== 0)
  .reduce((num1,num2) => num1 + num2);
}

arr.sort((a, b) => oddArraySum(a) - oddArraySum(b));