function interleave(arr1, arr2) {
  let finalArr = [];
  arr1.forEach((num, idx) => {
    finalArr.push(num);
    finalArr.push(arr2[idx]);
  });
  return finalArr;
}
