function sum(number1, number2) {
  return number1 + number2;
}

function calc(number1, number2, operation) {
  return operation(number1, number2);
}

console.log(calc(5, 10, sum));

function greeting(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greeting, 3000, 'Juan');