### Section_4

##### String properties and method

```javascript
let text = " Peter Jordan";

let result = text.length;    // a property
console.log(text.toLocaleLowerCase());    // some methods
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(0));
console.log(text.indexOf('p');     //no: return -1; multiple: return the first one
console.log(text.trim());    // return string: without the white space in the beginning and the end 
console.log(text.startsWith(' Peter'));
console.log(text.trim().toLowerCase().startsWith('peter'));    // combination use
console.log(text.includes('p'))    // return boolean
console.log(text.slice(0,1));    // String.slice(?start, ?end); return substring left included and right not
console.log(text.slice(-3));    //return last n substring
```

- javascript string methods: don't need to remember all, just know how to use and how to search

- use dot notation to access the property



##### Template Literals - ES6+

```javascript
// Backtick characters `` way more powerful than ''
// interpolation ${}: inside is either an expression or a var which will return an expr

const name = "john";
const age = 25;
const sentence = "Hey it's " + name + " and he is " + age + " years old.";

const value = `Hey it's ${name} and he is ${age} years old.`;
console.log(value);
console.log(sentence);


```



##### Array properties and methods

```javascript
const names =  ["john", "bobo", "barry", "olga", "ben", 2];
const lastNames = ['pepper', 'onion', 'banana'];


console.log(names.concat(lastNames));
console.log(allNames.reverse());


// unshift :Inserts new elements at the start of an array, and returns the new length of the array.
allNames.unshift("susy");
allNames.unshift("anna");
console.log(allNames);

//shift: Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
allNames.shift();

allNames.push('susy');    // append new elements
allNames.pop();    // remove the last element and return it
allNames.splice(start, number)    //from index start, return and mute number items


```



##### Values v.s. References

1. primitive data type: number, symbol, string, boolean, null, undefined

2. arrays, functios, objects = object

```javascript
// when assigning primitive data type value to variables, any changes are made directly to that value, without affecting original value.
const number = 1;
let number2 = number;
number2 = 7;
console.log(`first value ${number} and second value ${number2}`);

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references
let person = { name: "bob" };
let person2 = person;
person2.name = "test";
console.log(
  `the name of the first person is ${person.name} and the second person is ${person2.
name}`
);


/*
understanding:
Golden role of copy like Hug said in CS61B
= copy the content of the box on the right side to the left side
for primiry value, the content is just the value
for non-primitive value, the content is a 'pointer'-> reference, JS won't use new space to contain the same content, so all changes are on the original and only space, which will change all the references
*/

```



##### Null and undefined

```java
// null - "developer sets the value" can be replaced by 0
let number = 20 + null; // 20 + 0 -> 20
console.log(number);

//undefined - "JS can't find value for this"
// var without a value OR missing func args OR missing object properties
number = 20 + undefined;  // Nan
console.log(number);
```



##### Truthy and Falsy

```javascript
// Falsy value:
// "", '', 0, -0, NaN, false, null, undefined
```



##### Ternary Operator

```javascript

```
