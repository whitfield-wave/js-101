function letterSwapper(word) {
  let wordArr = word.split('');
  let firstLetter = wordArr[0];
  let lastLetter = wordArr[wordArr.length -1 ];
  wordArr[0] = lastLetter;
  wordArr[wordArr.length - 1] = firstLetter;

  return wordArr.join('');
}

function swap(string) {
  let stringArr = string.split(' ');
  let finalArray = stringArr.map(ele => letterSwapper(ele));
  return finalArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"