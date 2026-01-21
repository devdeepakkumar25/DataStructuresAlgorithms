// Longest Subarray with Majority Greater than K
// Difficulty: MediumAccuracy: 52.63%Submissions: 28K+Points: 4
// Given an array arr[] and an integer k, the task is to find the length of longest subarray in which the count of elements greater than k is more than the count of elements less than or equal to k.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 1], k = 2
// Output: 3
// Explanation: The subarray [2, 3, 4] or [3, 4, 1] satisfy the given condition, and there is no subarray of length 4 or 5 which will hold the given condition, so the answer is 3.
// Input: arr[] = [6, 5, 3, 4], k = 2
// Output: 4
// Explanation: In the subarray [6, 5, 3, 4], there are 4 elements > 2 and 0 elements <= 2, so it is the longest subarray.
class Solution {
  longestSubarray(arr, k) {
    // Code Here

    let n = arr.length;

    for (let i = 0; i < n; i++) {
      if (arr[i] > k) {
        arr[i] = 1;
      } else {
        arr[i] = -1;
      }
    }

    let prefixIdx = new Map();
    let sum = 0;

    prefixIdx.set(0, -1);

    for (let i = 0; i < n; i++) {
      sum += arr[i];

      if (!prefixIdx.has(sum)) {
        prefixIdx.set(sum, i);
      }
    }

    let minIdx = new Map();
    let currentMin = Infinity;

    let keys = Array.from(prefixIdx.keys()).sort((a, b) => a - b);

    for (let key of keys) {
      currentMin = Math.min(currentMin, prefixIdx.get(key));
      minIdx.set(key, currentMin);
    }

    sum = 0;
    let res = 0;

    for (let i = 0; i < n; i++) {
      sum += arr[i];
      if (sum > 0) {
        res = i + 1;
      } else if (minIdx.has(sum - 1)) {
        res = Math.max(res, i - minIdx.get(sum - 1));
      }
    }

    return res;
  }
}
class Solution2 {
  longestSubarray(arr, k) {
    const n = arr.length;

    // Step 1: transform array
    const b = new Array(n);
    for (let i = 0; i < n; i++) {
      b[i] = arr[i] > k ? 1 : -1;
    }

    // Step 2: prefix sum
    let sum = 0;
    const firstIndex = new Map();
    let res = 0;

    for (let i = 0; i < n; i++) {
      sum += b[i];

      // if sum > 0, whole prefix is valid
      if (sum > 0) {
        res = i + 1;
      }

      // store first occurrence
      if (!firstIndex.has(sum)) {
        firstIndex.set(sum, i);
      }

      // check if we can find smaller prefix
      if (firstIndex.has(sum - 1)) {
        res = Math.max(res, i - firstIndex.get(sum - 1));
      }
    }

    return res;
  }
}
