function staggeredCase(string) {

  let upper = true;

  return string.split('')
    .map(char => {
      if (!(/[a-z]/ig.test(char))) {
        return char;
      } else if (upper) {
        upper = false;
        return char.toUpperCase();
      } else {
        upper = true;
        return char.toLowerCase();
      }
    })
    .join('');
}