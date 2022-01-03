function bubbleSort(array) {
  let sort;
  do {
    sort = false;
    for (let idx = 0; idx < array.length - 1; idx++) {
      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        sort = true;
      }
    }
  } while (sort)
}