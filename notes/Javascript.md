## Javascript



- how to add js in our code?

  - inline Javascript

    ```html
    <button onclick="alert('hello world')"> click me <\button>
    ```

    what is downside this line

    - how about several buttons?

  - Internal Javascript

    ```html
    btn.btn*7{random button}
    <button class="btn">random button</button>
    
    <script>
        document.querySelectorAll('.btn').forEach((item) => {
            item.addEventListener('click',() =>{
                alert('this is awesome')
            })
        })
    </script>
    ```

    - create several buttons: Btn(button).button(class){content}
    - with internal JS, it only affect a single page
    - how about buttons from different pages

  - External

    - 尽管script中间没有内容也要全写两个括号

    - ```html
      <script src="./app.js">
      
      </script>
      ```

- methods

  ```javascript
  document.write("hello world");
  alert('hello world');
  console.log('hello world');
  ```

- statement and comments

  ```javascript
  // I woke up early today
  // statements - sets of instructions
  // comments - shortcut Command + /
  ```

- variables

  ```
  
  ```

  - can contain digits, letters, underscore, must start with letter, $ or _
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

  - 

  

  