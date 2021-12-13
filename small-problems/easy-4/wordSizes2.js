function alphanumeric(string) {
  let regex = /^[a-z0-9]+$/g;
  return regex.test(string)
}

function wordClean(string) {
  let wordArray = string.toLowerCase().split(' ');
  let cleanArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    let word ='';
    for (let idx = 0; idx < wordArray[i].length; idx++) {
      word += alphanumeric(wordArray[i][idx]) ? wordArray[i][idx] : '';
    }
    cleanArray.push(word);
  }
  return cleanArray;
}

function wordSizes(string) {
  let wordArray = wordClean(string);
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