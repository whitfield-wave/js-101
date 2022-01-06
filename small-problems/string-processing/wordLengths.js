function wordLengths(string) {
  if (string === undefined || string.length === 0) return [];
  return string.split(' ')
    .map(word => `${word} ${word.length}`);
}