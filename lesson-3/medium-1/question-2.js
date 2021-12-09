let munstersDescription = "The Munsters are creepy and spooky.";

munstersDescription = munstersDescription[0].toLowerCase() + munstersDescription.slice(1).toUpperCase();

console.log(munstersDescription);

/* solution
munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

things to remember here:
if you need to process a string character by character, use .split() and work on the array.

*/