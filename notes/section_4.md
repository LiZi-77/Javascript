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
