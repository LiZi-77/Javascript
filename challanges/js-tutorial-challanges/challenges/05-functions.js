/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

let order1, order2, order3;
function calculateResult(var1, var2, var3) {
  order1 = var1;
  order2 = var2;
  order3 = var3;
}

console.log(order1, order2, order3);
const exp = function (subTotal, tax) {
  return subTotal + tax;
};

console.log(exp(200, 20));

// const calculateTotal = function random(subTotal, tax) {
//   // const total = subTotal + tax;
//   // return total;
//   return subTotal + tax;
// };

// // console.log(calculateTotal(200, 20));

// const order1 = calculateTotal(100, 10);
// const order2 = calculateTotal(50, 5);
// const order3 = calculateTotal(25, 5);

// console.log(order1, order2, order3);
