/** 
* Implements the inside-out Fisher-Yates algorithm, a technique for efficiently creating a random ordering of array elements.
* Example call: fisherYates(9)
* Example output: [ 1, 8, 3, 7, 4, 2, 0, 6, 5 ]
*/

const fisherYates = (n) => {
  const result = []
  for (let i = 0; i < n; i += 1) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    result[i] = result[swapIndex];
    result[swapIndex] = i;
  }
  return result;
}
