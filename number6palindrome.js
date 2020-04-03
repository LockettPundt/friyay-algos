//6. Write a function to return a boolean based on whether or not the
// argument provided (string) is a palindrome. A palindrome is word or phrase that has the same characters whether forward or backwards
// eg racecar => true; truck => false

const palindrome = (string) => {
  return !!(string.split('').reverse().join('') === string);
}

console.log(palindrome('racecar'));
