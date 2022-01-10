function buyFruit(list) {
  let finalList = [];
  list.forEach(item => {
    let counter = 0;
    while (counter < item[1]) {
      finalList.push(item[0]);
      counter++;
    }
  });
  return finalList;
}