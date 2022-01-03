function triangle(ang1, ang2, ang3) {
  const angles = [ang1, ang2, ang3];

  if (isValidTriangle(angles)) {
    return detectTriangleType(angles);
  } else {
    return 'invalid';
  }

  function isValidTriangle(angles) {
    return (angles.reduce((prev, curr) => prev + curr) === 180) && !angles.includes(0);
  }

  function detectTriangleType(angles) {
    if (angles.includes(90)) {
      return 'right';
    } else if (angles.some(ang => ang > 90)) {
      return 'obtuse';
    } else {
      return 'acute';
    }
  }
}