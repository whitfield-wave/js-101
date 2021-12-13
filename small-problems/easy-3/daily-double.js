function crunch(word) {
  let char = 0;
  let final = '';
  while (char <= word.length- 1) {
    if(word[char] !== word[char + 1]) {
      final += word[char];
    }
    char += 1;
  }
  return final;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""