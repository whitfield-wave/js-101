function wordToDigit(string) {
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  nums.forEach(numWord => {
    let regex = '\\b' + numWord + '\\b';
    let re = new RegExp(regex, 'gi');
    string = string.replace(re, nums.indexOf(numWord));
  });

  return string;
}