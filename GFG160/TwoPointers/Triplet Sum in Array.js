// Triplet Sum in Array
// Difficulty: MediumAccuracy: 35.0%Submissions: 357K+Points: 4Average Time: 15m
// Given an array arr[] and an integer target, determine if there exists a triplet in the array whose sum equals the given target.

// Return true if such a triplet exists, otherwise, return false.

// Examples:

// Input: arr[] = [1, 4, 45, 6, 10, 8], target = 13
// Output: true
// Explanation: The triplet {1, 4, 8} sums up to 13.
// Input: arr[] = [1, 2, 4, 3, 6, 7], target = 10
// Output: true
// Explanation: The triplets {1, 3, 6} and {1, 2, 7} both sum to 10.
// Input: arr[] = [40, 20, 10, 3, 6, 7], target = 24
// Output: false
// Explanation: No triplet in the array sums to 24.

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */

class Solution {
  hasTripletSum(arr, target) {
    // code here
    let n = arr.length;
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          if (arr[i] + arr[j] + arr[k] === target) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */

class Solution {
  hasTwoSum(arr, l, r, target) {
    while (l < r) {
      let sum = arr[l] + arr[r];

      if (sum === target) {
        return true;
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
    return false;
  }

  hasTripletSum(arr, target) {
    // code here
    // let n = arr.length;

    // for(let i = 0; i < n; i++ ){
    //     for(let j = i+ 1; j < n -1; j++){
    //         for(let k = j + 1; k < n; k++){
    //             if(arr[i] + arr[j] + arr[k] === target){
    //                 return true;
    //             }
    //         }
    //     }
    // }
    // return false;

    // let n = arr.length;

    // for(let i = 0; i < n - 2; i++){
    //     let set = new Set();

    //     for(let j = i + 1; j < n; j++){
    //         let second = target - arr[i]- arr[j];

    //         if(set.has(second)){
    //             return true;
    //         }

    //         set.add(arr[j]);
    //     }

    // }

    // return false;

    let n = arr.length;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
      let requiredSum = target - arr[i];

      if (this.hasTwoSum(arr, i + 1, n - 1, requiredSum)) {
        return true;
      }
    }

    return false;
  }
}
