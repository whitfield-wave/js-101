function searchWord(wordToFind, string) {
  let count = 0;
  string.split(' ').forEach(word => {
    if (wordToFind.toLowerCase() === word.toLowerCase()) count += 1;
  });

  return count;
}