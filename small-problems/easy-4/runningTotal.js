function runningTotal(array) {
  if (array.length > 0) {
    let finalArr = [];
    finalArr.push(array.shift());
    return finalArr.concat(array.map(ele => ele + finalArr[finalArr.length - 1]))
  } else {
    return [];
  }
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);