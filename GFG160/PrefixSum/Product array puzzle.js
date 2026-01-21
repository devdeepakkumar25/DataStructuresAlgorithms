// Product array puzzle
// Difficulty: EasyAccuracy: 33.46%Submissions: 304K+Points: 2Average Time: 20m
// Given an array, arr[] construct a product array,
// res[] where each element in res[i] is the product of all elements in arr[] except arr[i].
//  Return this resultant array, res[].
// Note: Each element is res[] lies inside the 32-bit integer range.

// Examples:

// Input: arr[] = [10, 3, 5, 6, 2]
// Output: [180, 600, 360, 300, 900]
// Explanation: For i=0, res[i] = 3 * 5 * 6 * 2 is 180.
// For i = 1, res[i] = 10 * 5 * 6 * 2 is 600.
// For i = 2, res[i] = 10 * 3 * 6 * 2 is 360.
// For i = 3, res[i] = 10 * 3 * 5 * 2 is 300.
// For i = 4, res[i] = 10 * 3 * 5 * 6 is 900.

// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
  productExceptSelf(arr) {
    // code here

    let zeros = 0;
    let idx = -1;

    let prod = 1;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
      if (arr[i] === 0) {
        zeros += 1;
        idx = i;
      } else {
        prod *= arr[i];
      }
    }

    let res = new Array(n).fill(0);

    if (zeros === 0) {
      for (let i = 0; i < n; i++) {
        res[i] = Math.floor(prod / arr[i]);
      }
    } else if (zeros === 1) {
      res[idx] = prod;
    }

    return res;
  }
}
