function removeVowels(words) {
  return words.map(str => str.replace(/[aeiou]/ig, ''));
}