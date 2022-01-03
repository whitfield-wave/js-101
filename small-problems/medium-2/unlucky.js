function fridayThe13ths(year) {
  const FRIDAY = 5;
  let counter = 0;
  let date = new Date(`January 13, ${year}`);

  while (date.getFullYear() === year) {
    if (date.getDay() === FRIDAY) counter++;
    date = new Date(date.setMonth(date.getMonth() + 1));
  }

  return counter;
}