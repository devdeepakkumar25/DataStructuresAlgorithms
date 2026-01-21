// 3381. Maximum Subarray Sum With Length Divisible by K
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers nums and an integer k.

// Return the maximum sum of a subarray of nums, such that the size of the subarray is divisible by k.

// Example 1:

// Input: nums = [1,2], k = 1

// Output: 3

// Explanation:

// The subarray [1, 2] with sum 3 has length equal to 2 which is divisible by 1.

// Example 2:

// Input: nums = [-1,-2,-3,-4,-5], k = 4

// Output: -10

// Explanation:

// The maximum sum subarray is [-1, -2, -3, -4] which has length equal to 4 which is divisible by 4.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
  let n = nums.length;
  let prefixSum = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    prefixSum.push(sum);
  }

  let result = -Infinity;

  for (let start = 0; start < k; start++) {
    let currSum = 0;
    let i = start;

    while (i < n && i + k - 1 < n) {
      let j = i + k - 1;

      let subSum = prefixSum[j] - (i > 0 ? prefixSum[i - 1] : 0);

      currSum = Math.max(subSum, currSum + subSum);

      result = Math.max(result, currSum);
      i += k;
    }
  }
  return result;
};
