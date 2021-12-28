function multiplicativeAverage(array) {
  let product = array.reduce((prev, curr) => prev * curr)
  return (product / array.length).toFixed(3)
}