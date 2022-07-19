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

### Data types

1. **variables**

```

```

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

  ​		尽管html中form表项 type=number, 但是html返回给js的数据是**string**类型



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

  



