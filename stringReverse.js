// 3. Write a function to reverse a string (provided as an argument)


const stringReverse = (string) => {
  return string.split('').reverse().join('');
}


console.log(stringReverse('Write a function to reverse a string (provided as an argument)'));