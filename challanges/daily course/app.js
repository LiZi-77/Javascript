const names = ["john", "bobo", "barry", "olga", "ben", 2];
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);

console.log(names.concat(lastNames));
console.log(allNames.reverse());

// unshift
allNames.unshift("susy");
allNames.unshift("anna");
console.log(allNames);

// shift
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);
