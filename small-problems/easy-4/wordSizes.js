function wordSizes(string) {
  let wordArray = string.split(' ');
  let lengthCount = {};
  let lengthArray = wordArray.map(x => x.length );

  for (let i = 0; i < lengthArray.length; i++) {
    if (lengthArray[i] === 0) {
      continue;
    }
    if(Object.keys(lengthCount).includes(String(lengthArray[i]))) {
        lengthCount[lengthArray[i]] += 1;
    } else {
      lengthCount[lengthArray[i]] = 1;
    }
  }
  return lengthCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}