// Largest rectangular sub-matrix whose sum is 0
// Difficulty: HardAccuracy: 45.28%Submissions: 38K+Points: 8Average Time: 30m
// Given a matrix mat[][]. Find the size of the largest sub-matrix whose sum is equal to zero.
// The size of a matrix is the product of rows and columns. A sub-matrix is a matrix obtained from the given matrix
// by deletion of several (possibly, zero or all) rows/columns from the beginning and several (possibly, zero or all) rows/columns from the end.

// Examples:

// Input: mat[][] = [[9, 7, 16, 5], [1, -6, -7, 3], [1, 8, 7, 9], [7, -2, 0, 10]]
// Output: 6
// Explanation:

// Input: mat[][] =  [[1, 2, 3], [-3, -2, -1], [1, 7, 5]]
// Output:  6
// Explanation:

// Input: mat[][] = [[1, -1], [-1, 1]]
// Output: 4
// Explanation: The largest sub-matrix with sum 0 is [[1, -1], [-1, 1]].

// User function Template for javascript
class Solution {
  // Main function to find the largest rectangle sub-matrix with 0 sum.

  maxLengthSubarraySumZero(arr) {
    let n = arr.length;
    let maxLength = 0;

    let prefSum = 0;

    let map = new Map();

    for (let i = 0; i < n; i++) {
      prefSum += arr[i];

      if (prefSum === 0) {
        maxLength = Math.max(maxLength, i + 1);
      } else if (map.has(prefSum)) {
        maxLength = Math.max(maxLength, i - map.get(prefSum));
      } else {
        map.set(prefSum, i);
      }
    }
    return maxLength;
  }

  zeroSumSubmat(mat) {
    // code here

    let rows = mat.length;
    let cols = mat[0].length;

    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
      let temp = new Array(cols).fill(0);

      for (let j = i; j < rows; j++) {
        for (let k = 0; k < cols; k++) {
          temp[k] += mat[j][k];
        }

        let lengthZeroSum = this.maxLengthSubarraySumZero(temp);
        maxArea = Math.max(maxArea, lengthZeroSum * (j - i + 1));
      }
    }
    return maxArea;
  }
}
