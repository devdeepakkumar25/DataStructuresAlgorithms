// Longest Subarray with Sum K
// Difficulty: MediumAccuracy: 24.64%Submissions: 764K+Points: 4
// Given an array arr[] containing integers and an integer k,
//  your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k.
//  If there is no subarray with sum equal to k, return 0.

// Examples:

// Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
// Output: 6
// Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10].
// The length of the longest subarray with a sum of 15 is 6.

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
  longestSubarray(arr, k) {
    // code here

    let map = new Map();

    let prefixSum = 0;
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
      prefixSum += arr[i];

      if (prefixSum === k) {
        maxLength = i + 1;
      }

      if (map.has(prefixSum - k)) {
        maxLength = Math.max(maxLength, i - map.get(prefixSum - k));
      }

      if (!map.has(prefixSum)) {
        map.set(prefixSum, i);
      }
    }

    return maxLength;
  }
}
