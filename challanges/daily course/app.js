const person = {
  name: "john",
  lastName: "peters",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  // method
  greeting() {
    console.log("hello my name is JOGH");
  },
};

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

const age = person.age;
person.name = "bob";
