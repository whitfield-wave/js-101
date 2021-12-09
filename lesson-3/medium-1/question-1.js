let string = 'The Flintstones Rock!';
let pad = 0;

while (pad <=10) {
  console.log(string.padStart(string.length + pad, ' '));
  pad += 1;
}