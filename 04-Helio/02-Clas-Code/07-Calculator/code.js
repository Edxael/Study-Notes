console.log("Hello");


const calculate = {
  add: (num1, num2)  => num1 + num2,
  suc: (num1, num2)  => num1 - num2,
  mul:(num1, num2)  => num1 * num2,
  div: (num1, num2)  => num1 / num2
}

console.log(  calculate.suc(5, 4)   );
console.log(calculate.div(50, 2));
console.log(calculate.mul(5, 8));
