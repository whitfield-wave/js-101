let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.slice().map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => Number(a) - Number(b));
  } else {
    return subArr.slice().sort();
  };
});