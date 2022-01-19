
function doubleConsonants(string) {
  let result = '';
  let regex = new RegExp('[b-d,f-h,j-n,p-t,v-z]', 'gi');

  for (let idx = 0; idx < string.length; idx++) {
    if (regex.test(string[idx])) {
      result += string[idx].repeat(2);
    } else {
      result += string[idx];
    }
  };
  return result;
};