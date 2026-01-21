// Longest subarray with sum divisible by K
// Difficulty: MediumAccuracy: 33.72%Submissions: 109K+Points: 4
// Given an array arr[] and a positive integer k, find the length of the longest subarray with the sum of the elements divisible by k.
// Note: If there is no subarray with sum divisible by k, then return 0.

// Examples :

// Input: arr[] = [2, 7, 6, 1, 4, 5], k = 3
// Output: 4
// Explanation: The subarray [7, 6, 1, 4] has sum = 18, which is divisible by 3.
// Input: arr[] = [-2, 2, -5, 12, -11, -1, 7], k = 3
// Output: 5
// Explanation: The subarray [2, -5, 12, -11, -1] has sum = -3, which is divisible by 3.
// Input: arr[] = [1, 2, -2], k = 2
// Output: 2
// Explanation: The subarray is [2, -2] has sum = 0, which is divisible by 2.

// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  // Function to find the length of the longest subarray with sum divisible by k.
  longestSubarrayDivK(arr, k) {
    // your code here

    // let res = 0;

    // for(let i = 0; i < arr.length; i++){
    //     let sum = 0;

    //     for(let j = i; j < arr.length; j++){
    //         sum = (sum + arr[j]) % k;

    //         if(sum === 0){
    //             res = Math.max(res,j - i + 1);
    //         }
    //     }
    // }
    // return res;

    let n = arr.length;
    let res = 0;

    let prefIdx = new Map();

    let sum = 0;

    for (let i = 0; i < n; i++) {
      sum = (((sum - arr[i]) % k) + k) % k;

      if (sum === 0) {
        res = i + 1;
      } else if (prefIdx.has(sum)) {
        res = Math.max(res, i - prefIdx.get(sum));
      } else {
        prefIdx.set(sum, i);
      }
    }
    return res;
  }
}
