function greetings(nameArray, info) {
  let name = nameArray.join(' ');
  return `Hello, ${name}! It's nice to have a ${info.title} ${info.occupation} around.`;
}

