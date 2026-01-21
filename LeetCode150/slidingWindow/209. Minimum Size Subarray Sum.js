// 209. Minimum Size Subarray Sum

// Given an array of positive integers nums and a positive integer target,
//  return the minimal length of a subarray whose sum is greater than or equal to target.
//  If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0;
  let j = 0;
  let n = nums.length;

  let minLen = Infinity;

  let sum = 0;
  let start_idx = -1;
  let end_idx = -1;
  while (j < n) {
    sum += nums[j];

    while (sum >= target) {
      if (j - i + 1 < minLen) {
        minLen = j - i + 1;
        start_idx = i;
        end_idx = j;
      }
      // minLen = Math.min(minLen, j - i +1);
      // start_idx = i;
      // end_idx = j;
      sum -= nums[i];
      i++;
    }
    j++;
  }
  if (minLen === Infinity) {
    console.log([]);
    return 0;
  }
  console.log(nums.slice(start_idx, end_idx + 1));
  return minLen;
  // return minLen === Infinity ? 0: minLen;
};
