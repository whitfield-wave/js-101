let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.slice().map(obj => {
  let finalObj = Object.assign({},obj);
  for (let key in finalObj) {
    finalObj[key] += 1;
  }
  return finalObj;
});