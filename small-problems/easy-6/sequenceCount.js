function sequence(count, start) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(start * i);
  }
  return arr;
}