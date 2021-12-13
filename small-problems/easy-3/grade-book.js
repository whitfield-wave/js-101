function getGrade(a, b, c) {
  let mean = ((a + b + c) / 3);
  if (mean >= 90) {
    return 'A';
  } else if (mean >= 80) {
    return 'B';
  } else if (mean >= 70) {
    return 'C';
  } else if (mean >= 60) {
    return 'D';
  } else {
    return 'F'
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"