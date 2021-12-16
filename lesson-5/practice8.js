let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    let wordArr = word.split('');
    wordArr.forEach(letter => {
      if ('aeiou'.includes(letter)) {
        console.log(letter);
      }
    });
  });
});
