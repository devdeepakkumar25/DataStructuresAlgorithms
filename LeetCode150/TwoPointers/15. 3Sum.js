// 15. 3Sum

// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var result = [];

function twoSum(nums, target, i, j) {
  while (i < j) {
    let sum = nums[i] + nums[j];

    if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    } else {
      result.push([-target, nums[i], nums[j]]);

      while (i < j && nums[i] === nums[i + 1]) i++;
      while (i < j && nums[j] === nums[j - 1]) j--;
      i++;
      j--;
    }
  }
}

var threeSum = function (nums) {
  result.length = 0;
  let n = nums.length;

  if (n < 3) return [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let num1 = nums[i];
    let target = -num1;
    twoSum(nums, target, i + 1, n - 1);
  }

  return result;
};
