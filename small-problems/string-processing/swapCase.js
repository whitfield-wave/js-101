function swapCase(string) {
  let final = '';
  string.split('').forEach(char => {
    if (char.toUpperCase() === char) {
      final += char.toLowerCase();
    } else {
      final += char.toUpperCase();
    }
  });
  return final;
}