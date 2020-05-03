// Given an array of integers and a target integer, return the indices of the two numbers that add up to the target.

// Example:
// Given nums = [2, 7, 11, 15], target = 9
// return [0, 1], because nums[0] + nums[1] = 2 + 7 = 9

// You may assume that each input has exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// // Most naive solution: Searching through the full array once for each number.
//   // for array [1, 2, 3, 4, 5], check 1+2 to see if it equals the target, then 1+3, 1+4, 1+5, 2+3, and so on. 
// // Time complexity: O(n^2)
// // Space complexity: O(1)

// module.exports.twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i += 1) {
//       for (let j = i + 1; j < nums.length; j += 1) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
// };

// // Can we do O(nlogn)?
// // What if we sort it first?
//   //  1  2  5  7  11  13           target = 9
//   //     *     *
// // Time complexity: O(nlogn)
// // Space complexity: O(1)

// module.exports.twoSum = (nums, target) => {
//   nums = nums.map((num, baseIndex) => [num, baseIndex]);            // O(n)
//   nums.sort((a, b) => a[0] - b[0]);                                 // O(nlogn)
//   let candidate1 = 0;
//   let candidate2 = nums.length - 1;
//   while (nums[candidate1][0] + nums[candidate2][0] !== target) {
//     if (nums[candidate1][0] + nums[candidate2][0] < target) {
//       candidate1 += 1;
//     } else {
//       candidate2 -= 1;
//     }
//   }
//   return [nums[candidate1][1], nums[candidate2][1]];
// }

// Hash tables are O(1) lookup (pretty much).
// Can we use that to achieve O(n)?
  // For each number, there is a "partner" number that would add up to the target.
  // So for each number, check to see if its "partner" already lives in the hash table.
    // If not, insert the number and its index into the hash table.
    // If so, return their indices.
// Time complexity: O(n)
// Space complexity: O(n)

module.exports.twoSum = (nums, target) => {
  const hashTable = {};
  for (var index = 0; index < nums.length; index += 1) {
    let num = nums[index]
    if (hashTable[target - num] !== undefined) {
      return [index, hashTable[target - num]];
    } 
    hashTable[num] = index;
  }
}