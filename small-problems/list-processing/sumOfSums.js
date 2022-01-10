// input = array of numbers
// output = sum of each subsequent sum of numbers in array starting with the first

// ex: 
// sumOfSums([3, 5, 2]);        (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36

// starting from the beginning element
// add the sum of first element to a sum variable
// include the next number in the array and find sum
// repeat until finished

function sumOfSums(array) {
  let sum = 0;

  for (let idx = 0; idx < array.length; idx++) {
    sum += array.slice(0, idx + 1).reduce((prev, curr) => prev + curr);
  }

  return sum;
}