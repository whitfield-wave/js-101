function countOccurrences(list) {
  let count = {};

  list.forEach(ele => {
    if (count[ele]) {
      count[ele] += 1;
    } else {
      count[ele] = 1;
    }
  });
  for (item in count) {
    console.log(`${item} => ${count[item]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);