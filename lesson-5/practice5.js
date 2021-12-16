let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let ageTotal = 0;

for (let person in munsters) {
  if (munsters[person].gender === 'male') {
    ageTotal += munsters[person].age;
  }
}

console.log(ageTotal);


