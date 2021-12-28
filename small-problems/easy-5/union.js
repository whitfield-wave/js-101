

function union (arr1, arr2) {
  let combinedArr = [];
  arr1.forEach(num => {
    if (!combinedArr.includes(num)) {
      combinedArr.push(num);
    }
  });
  arr2.forEach(num => {
    if (!combinedArr.includes(num)) {
      combinedArr.push(num);
    }
  });
  return combinedArr;
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]