function halvsies(array) {
  let newArr = [];
  let midpoint = Math.ceil(array.length / 2) ;
  newArr.push(array.slice(0, midpoint));
  newArr.push(array.slice(midpoint));
  return newArr;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]