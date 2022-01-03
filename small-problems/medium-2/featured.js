function featured(number) {
  if (number >= 9876543201) return "There is no possible number that fulfills those requirements.";
  let featuredNum = multOfSeven(number) === number ? multOfSeven(number + 7) : multOfSeven(number);

  if (featuredNum % 2 === 0) {
    featuredNum += 7;
  }
  while (!uniqueDigits(featuredNum)) {
    featuredNum = multOfSeven(featuredNum + 14);
  }

  return (featuredNum);


  function uniqueDigits(number) {
    let numArray = String(number).split('');
    for (let idx = 0; idx < numArray.length; idx++) {
      if (numArray.slice().filter(num => num === numArray[idx]).length > 1) {
        return false;
      }
    }
    return true;
  }

  function multOfSeven(number) {
    while (number % 7 > 0) {
      number += 1;
    }
    return number;
  }
}