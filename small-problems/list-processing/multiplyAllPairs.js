function multiplyAllPairs(arr1, arr2) {
  let finalArr = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => finalArr.push(num1 * num2));
  });
  return finalArr.sort((a, b) => a - b);
}