function digitList(num) {
  let numList = String(num).split('');
  return numList.map(num => Number(num));
}

