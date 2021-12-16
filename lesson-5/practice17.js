function arrayPrint(array, start, end) {
  return array.slice(start,end).join('');
}
function hex() {
  const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let UUID = [];
  while (UUID.length < 32) {
    let hexNum = String(hexDigits[Math.floor(Math.random() * 16)]);
    UUID.push(hexNum);
  }
  return `${arrayPrint(UUID,0,8)}-${arrayPrint(UUID,8,12)}-${arrayPrint(UUID,12,16)}-${arrayPrint(UUID,16,20)}${arrayPrint(UUID,20,30)}`;
}

console.log(hex());
console.log(hex());
console.log(hex());

