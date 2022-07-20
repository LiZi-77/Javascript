## Javascript

- how to add js in our code?
  
  - inline Javascript
    
    ```html
    <button onclick="alert('hello world')">click me <\button></button>
    ```
    
    what is downside this line
    
    - how about several buttons?
  
  - Internal Javascript
    
    ```html
    btn.btn*7{random button}
    <button class="btn">random button</button>
    
    <script>
      document.querySelectorAll(".btn").forEach((item) => {
        item.addEventListener("click", () => {
          alert("this is awesome");
        });
      });
    </script>
    ```
    
    - create several buttons: Btn(button).button(class){content}
    - with internal JS, it only affect a single page
    - how about buttons from different pages
  
  - External
    
    - 尽管 script 中间没有内容也要全写两个括号
    
    - ```html
      <script src="./app.js"></script>
      ```

- methods
  
  ```javascript
  document.write("hello world");
  alert("hello world");
  console.log("hello world");
  ```

- statement and comments
  
  ```javascript
  // I woke up early today
  // statements - sets of instructions
  // comments - shortcut Command + /
  ```

### Basics

1. **variables**
- can contain digits, letters, underscore, must start with letter, $ or \_

- no keyword, cannot start with a number

- Case sensitive

- camelCase or underscore

- **var** **let** and **const**
  
  - Var: you can easily overwrite variable declarations
    
    ```
    var camper = "james";
    var camper = "david";
    console.log(camper)
    ```
  
  - Let: **ES6**, a variable with the same name can nonly be declared once, but you can change its value later.
    
    ```
    let camper;
    camper = "James";
    ```
  
  - Const: once declared, can't change its value + can't declared without an initial value.
2. **Strings**
- String concatenation 
  
  ```javascript
  const street = "Georg Brandes Plads 4";
  const country = "Denmark";
  
  const fullMailingAddress = street + ", " + country;
  ```

**3. Numbers**

- loosely types: don't declare type

- ```javascript
  const number = 34;
  const number_string = '34';
  
  let pants = 2.466;
  pants = 'are great'
  console.log();
  ```
  
  there's no different between declare a string or an integer or a decimal
  
  In the **console**, the integers or the decimals will be in blue, and the strinng will be in black.

- += -= /= *= ++ -- % operations

**4. implicit type conversion**

- if we try to do operations on 2 variables:
  
  - string + number => string
  - string + string  => string 
  - "number" + "number" => string 
  - "number" - "number" => number
  
  [note]: + is an exception, other math operations will first try to convert the type of var to finish the math operation.
  
  ​        尽管html中form表项 type=number, 但是html返回给js的数据是**string**类型

**5.Data Type**

- 7 data types in total

- Primitive: <u>**String**</u>, <u>**Number**</u>, **Boolean**, <u>**Null**</u>(<u>bug, typeof(null) = object</u> ), <u>**Undefined**</u>(<u>some var not defined</u>), **Symbol**(ES6)

- **Object**: Arrays, Functions, Objects

- Typeof : operator 

**6.Arrays, Functions and Objects**

- **<u>Arrays</u>**: [], 0 index based, we can also store functions and objects inside an array
  
  ```javascript
  // store
  const friends = ['john', 'peter', 'bob', 'susy', 45, undefined, null];
  
  //access
  console.log(friends[1]);
  
  //change / update
  friends[4] = 'anna';
  ```

- **<u>Functions</u>**: declare + invoke
  
  function reduce redundancy
  
  ```javascript
  // Declare : function keyword
  function hello(){
      console.log('Hello There Bob');
      console.log('Hello There John');
      console.log('Hello There Susy');
  }
  
  // Invoke:
  hello()
  ```
  
  ```javascript
  // parameters + arguments
  
  // params
  function greet(name){
      console.log('Hello there ' + name);
  }
  hello('Anna');
  ```
  
  ```javascript
  // return
  // default undefined, shortcuts, ignores after
  // 1 inch 2.54cm take inches and then return centimeters
  function calculate(value){
    return value * 2.54;
  }
  ```
  
  ```javascript
  // another way to define a function - expressions
  // create a variable, assign to FUNCTION(not value), use var
  // diff - hoisting, use - arrow func, libraries
  
  
  ```

  // funnction definition/declaration 
  function addValues(num1, num2) {
    return num1 + num2;
  }

  const firstValue = addValues(3,4);
  connst secondValue = addValues(12, 34);

  // functionn expression: if there's still inner function name, that function will be invalid
  const add = function (num1, num2) {
    return num1, num2;
  }

  //diff: how to invoke
  const thirdValue = add(5,6);

  // arrow functions -> expression
  const multiply = (num1, num2) => num1 * num2;

```

- **<u>Objects</u>**

objects in JS are collections of properties/keys

```javascript
// Objects - key/value pairs methods
// dot notation

// eg. car is an object and it has some properties
const person = {
      name:'john',
      lastName:'peters',
      age:40,
    education:false,
    married:true,
    siblings:['anna','susan','peter'],
      // method
    /*
    greeting: function (){
    console.log('hello my name is JOHN.');
    },
    */
    greeting(){
      console.log('hello my name is JOGH');
    },
};
```

1. Const object_name **=** {};

2. Field_name**:** field_value**,**

3. Method: greeting() {
   
   },

**<u>6.conditional statements</u>**

```
if () {
...
}
else if () {
...
} // 后面没有分号
```

1. comparison operations: >, <, >=, <=, ==, ===, !=, !==

2. equality
   
   ```javascript
   // == checks only values
   // === checks also type
   const num1 = 6;
   const num2 = '6';
   
   const value = num1 == num2; // true inexplicit type conversionn
   const value = num1 === num2; // false
   ```

**<u>7. Logical Operators</u>**

```javascript
//( || - OR), (&&-AND), !
```

**<u>8. switch statements</u>**

```javascript
// Switch
// dice values: 1-6

// way1: all if

// way2: else if

// way3: switch
switch (dice) {
  case 1:
    console.log('you got one');
  case 2:

}
```



**<u>9.Loops</u>**

```javascript
// while loops
while () {
   ... ;
}


// do while loop
do{
   ... ;
} while()


// for loop
for () {
   ... ;
}
```


