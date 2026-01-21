// Largest subarray of 0's and 1's
// Difficulty: EasyAccuracy: 32.96%Submissions: 130K+Points: 2Average Time: 20m
// Given an array arr of 0s and 1s. Find and return the length of the longest subarray with equal number of 0s and 1s.

// Examples:

// Input: arr[] = [1, 0, 1, 1, 1, 0, 0]
// Output: 6
// Explanation: arr[1...6] is the longest subarray with three 0s and three 1s.
// Input: arr[] = [0, 0, 1, 1, 0]
// Output: 4
// Explnation: arr[0...3] or arr[1...4] is the longest subarray with two 0s and two 1s.

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  maxLen(arr) {
    // code here

    let map = new Map();

    let prefixSum = 0;

    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
      prefixSum += arr[i] === 0 ? -1 : 1;

      if (prefixSum === 0) maxLength = i + 1;

      if (map.has(prefixSum)) {
        maxLength = Math.max(maxLength, i - map.get(prefixSum));
      } else {
        map.set(prefixSum, i);
      }
    }

    return maxLength;
  }
}
