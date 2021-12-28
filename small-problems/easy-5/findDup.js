function findDup(array) {
  let someArr = array.slice();
  for (let i = 0; i < array.length; i++) {
    let num = someArr.shift();
    console.log(someArr)
    if (someArr.includes(num)) {
      return num;
    }
  }
}

