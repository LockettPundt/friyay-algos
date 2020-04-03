//1. Fizz Buzz
// Write a program that prints the numbers from 1 to 'n'. But for multiples of three print 'Fizz'
// instead of the number and for the multiples of five print 'Buzz'. For numbers which are multiples of both three and five print 'FizzBuzz'


const fizzBizz = (num) => {
  let i = 1;
  while (i <= num) {
    (i % 3 === 0 && i % 5 === 0)? console.log('FizzBuzz') :
    (i% 5 === 0) ? console.log('Buzz') :
    (i % 3 === 0) ? console.log('fizz') :
    console.log(i);
    i++;
  }
}


fizzBizz(16);