function triangle(sides) {
  let space = sides - 1;
  let stars = 1;

  while (stars <= sides) {
    console.log(`${' '.repeat(space)}${'*'.repeat(stars)}`);
    space -= 1;
    stars += 1;
  }
}

triangle(9);