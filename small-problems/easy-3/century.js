// Input: year integer
// Output: number of century followed by appropriate ordinal ending

// first century contains years 01-100.

// if a 1, 2, or 3 follows a 0 or 2-9, they use st, nd, and rd respectively.
// all other numbers use th.

// calculate century number based on input year
// append correct ending

function century(year) {
  const endings = {1 : 'st', 2 : 'nd', 3 : 'rd'};
  let centuryNum = String(Math.ceil(year / 100));
  let tensPlace = centuryNum[centuryNum.length - 2];
  let lastPlace = centuryNum[centuryNum.length - 1];
  if (tensPlace !== '1' && Object.keys(endings).includes(lastPlace)) {
    return centuryNum + endings[lastPlace];
  } else {
    return centuryNum + 'th';
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"