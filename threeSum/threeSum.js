// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Brute force solution: check all possible triplets, see if they equal zero.

// More elegant solution 1: like 2Sum, add all possible pairs into a hash table.
// This hash table stores their sum as a key, and their indices, in a tuple, as a value.
// Then iterate through the input array once more, checking to see if its "partners" line in the hash table.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

// Hashtable keys:    {      -2             -1            0             1            2 }

// Hashtable values:  [[0, 4], [2, 3]]    undefined     undefined   undefined      undefined                         (for example)

// Time complexity: O(n^2)
// Space complexity: O(n^2)


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const threeSum = (nums) => {
//   const hashTable = {};
//   // Load tuples into hash table.
//   for (var i = 0; i < nums.length; i += 1) {
//     for (var j = i + 1; j < nums.length; j += 1) {
//         if (!hashTable[nums[i] + nums[j]]) {
//           hashTable[nums[i] + nums[j]] = [[i, j]];
//         } else {
//           hashTable[nums[i] + nums[j]].push([i, j]);
//         }
//     }
//   }

//   const solutionIndices = [];
//   // Check each element to see if partner tuple exists.
//   nums.forEach((num, index) => {
//     const partner = -num;
//     if (hashTable[partner]) {
//       hashTable[partner].forEach((tuple) => {
//         var triple = tuple.slice()
//         if (triple[0] !== index && triple[1] !== index) {
//           triple.push(index);
//           let duplicateFound = false;
//           solutionIndices.forEach((solutionTriple) => {
//             if (nums[solutionTriple[0]] * nums[solutionTriple[1]] * nums[solutionTriple[2]] 
//               === nums[triple[0]] * nums[triple[1]] * nums[triple[2]]) {
//               duplicateFound = true;
//             }
//           })
//           if (!duplicateFound) {
//             solutionIndices.push(triple);
//           }
//         }
//       });
//     }
//   });

//   const solutions = solutionIndices.map((triple) => {
//     return triple.map((index) => {
//       return nums[index];
//     });
//   })

//   return solutions;
// };

// BETTER SOLUTION using 2Sum?

const twoSum = (nums, target) => {
  const hashTable = {};
  const solutions = [];
  for (var index = 0; index < nums.length; index += 1) {
    let num = nums[index]
    if (hashTable[target - num]) {
      solutions.push([index, hashTable[target - num]]);
    } 
    hashTable[num] = index;
  }

  return solutions;
}

const threeSum = (nums) => {
  const solutionStrings = new Set();
  nums.forEach((num, index) => {
    const possibleTwoSums = twoSum(nums, -num);
    if (possibleTwoSums.length) {
      possibleTwoSums.forEach((tuple) => {
        if (tuple[0] !== index && tuple[1] !== index) {
          let triple = tuple.slice();
          triple.push(index);
          const tripleWithValues = triple.map((index) => {
            return nums[index];
          });
          tripleWithValues.sort();
          solutionStrings.add(JSON.stringify(tripleWithValues));
        }
      });
    }
  });

  const solutions = [];
  solutionStrings.forEach((string) => {
    solutions.push(JSON.parse(string));
  });
  
  return solutions;
}




console.log(threeSum([-1, 0, 1, 2, -1, -4]));