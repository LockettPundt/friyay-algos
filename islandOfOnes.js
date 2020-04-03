// 5. Given a 2D array of 1s and 0s, count the number of "islands of 1s" (e.g. groups of 1s)
//eg [0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1] => 7

const islandOfOnes = (array) => {
  let count = 0;
  array.forEach((item, index) => {
    return (index !== 0 && item === 1 && array[index - 1] === 0) ? count++ : '';
  });
  return count;
}

console.log(islandOfOnes([0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1]));