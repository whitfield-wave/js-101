function twice(num) {
  let numString = String(num);
  let halfway = (numString.length /2);
  if (numString.length % 2 !== 0 || numString.slice(0,halfway) !== numString.slice(halfway)) {
    return num * 2;
  } else {
    return num;
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676