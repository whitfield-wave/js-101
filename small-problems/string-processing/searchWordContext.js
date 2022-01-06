function searchWord(wordToFind, string) {
  return string.split(' ')
    .map(word => {
      return wordToFind.toLowerCase() === word.toLowerCase()
        ? `**${word.toUpperCase()}**` : word;
    })
    .join(' ');
}