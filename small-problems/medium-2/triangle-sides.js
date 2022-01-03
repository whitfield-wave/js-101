function triangle(side1, side2, side3) {
  let triangle = [side1, side2, side3].sort((a, b) => a - b);

  if (triangle.includes(0) || ((triangle[0] + triangle[1]) <= triangle[2])) {
    return 'invalid';
  } else if (triangle.every(num => num === triangle[0])) {
    return 'equilateral';
  } else if (triangle[0] !== triangle[1] &&
    triangle[0] !== triangle[2] &&
    triangle[1] !== triangle[2]) {
    return 'scalene';
  } else {
    return 'isosceles';
  }
}