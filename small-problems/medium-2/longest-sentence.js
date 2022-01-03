function longestSentence(text) {
  const regex = /(\.|\?|\!)/
  let wordArray = text.split(regex);
  let [wordCount, longestString] = [0, ''];

  wordArray.forEach((sentence, index) => {
    let sentenceWords = sentence.split(' ')
      .filter(word => word !== '');
    if (sentenceWords.length > wordCount) {
      wordCount = sentenceWords.length;
      longestString = sentence + wordArray[index + 1];
    }
  });
  console.log(longestString + '\n');
  console.log(`The longest sentence has ${wordCount} words.`);
}