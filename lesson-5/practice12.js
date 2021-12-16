let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.slice().map(subArr => subArr.filter(ele => ele % 3 === 0));