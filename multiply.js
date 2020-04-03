//2. Write a function that multiples two numbers (provided as arguments) without using *

const multiply = (num1, num2) => {
  let arr = [];
  let i = 0;
  while (i < num2) {
    arr.push(num1);
    i++;
  }
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0)
}

console.log(multiply(8, 8));