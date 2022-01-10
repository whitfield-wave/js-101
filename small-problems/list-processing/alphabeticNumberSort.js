function alphabeticNumberSort(array) {
  const numWords = [
    'zero', 'one',
    'two', 'three',
    'four', 'five',
    'six', 'seven',
    'eight', 'nine',
    'ten', 'eleven',
    'twelve', 'thirteen',
    'fourteen', 'fifteen',
    'sixteen', 'seventeen',
    'eighteen', 'nineteen'
  ];

  return array.map(num => numWords[num]).sort()
    .map(numStr => numWords.indexOf(numStr));

}