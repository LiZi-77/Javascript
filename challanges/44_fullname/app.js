// Arrays and for loop

// const names = ['anna', 'susy', 'bob'];
// const lastName = 'shakeandbake';
// let newArray = [];

// //for loop
// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(names[i]);
//   const fullName = `${names[i]} ${lastName}`;
//   newArray.push(fullName);
// }

// console.log(names);
// console.log(newArray);

const names = ["anna", "susy", "bob"];
const lastName = "lalalalala";
let newArray = [];

//for loop to iterate the array
for (let i = 0; i < names.length; i++) {
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}
console.log(newArray);
