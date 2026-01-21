// Subarray Sum Divisible By K
// Difficulty: MediumAccuracy: 47.78%Submissions: 17K+Points: 4
// You are given an integer array arr[] and a value k. The task is to find the count of all sub-arrays whose sum is divisible by k.

// Examples:

// Input: arr[] = [4, 5, 0, -2, -3, 1], k = 5
// Output: 7
// Explanation: There are 7 sub-arrays whose sum is divisible by k: [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3] and [-2, -3]
// Input: arr[] = [2, 2, 2, 2, 2, 2], k = 2
// Output: 21
// Explanation: All subarray sums are divisible by 2
// Input: arr[] = [-1, -3, 2], k = 5
// Output: 0
// Explanation: There is no such sub-array whose sum is divisible by k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];

      if (sum % k === 0) {
        count++;
      }
    }
  }

  return count;
};

var subarraysDivByK = function (nums, k) {
  let n = nums.length;

  let count = 0;

  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = i === 0 ? nums[j] : nums[j] - nums[i - 1];
      if (sum % k === 0) {
        count++;
      }
    }
  }
  return count;
};

let arr = [2, -6, 3, 1, 2, 8, 2, 1];
let k = 7;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let n = nums.length;

  let map = new Map();

  let sum = 0;

  map.set(0, 1);

  let result = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    let rem = sum % k;

    if (rem < 0) {
      rem += k;
    }

    if (map.has(rem)) {
      result += map.get(rem);
    }

    map.set(rem, (map.get(rem) ?? 0) + 1);
  }

  return result;
};

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
  // Function to count the number of subarrays with a sum divisible by k
  subCount(arr, k) {
    // code here

    // let n = arr.length;

    // let map = new Map();

    // let sum = 0;

    // map.set(0,1);

    // let result = 0;

    // for(let i = 0; i < n ; i++){
    //     sum += arr[i];

    //     let rem = sum % k;

    //     if(rem < 0){
    //         rem += k;
    //     }

    //     if(map.has(rem)){
    //         result += map.get(rem);
    //     }

    //     map.set(rem,(map.get(rem) ?? 0) +1);

    // }
    // return result;

    let n = arr.length;

    let res = 0;

    let sum = 0;

    let prefIdx = new Map();
    prefIdx.set(0, 1);

    for (let i = 0; i < n; i++) {
      sum = (((sum + arr[i]) % k) + k) % k;

      if (prefIdx.has(sum)) {
        res = res + prefIdx.get(sum);
      }

      prefIdx.set(sum, (prefIdx.get(sum) ?? 0) + 1);
    }
    return res;
  }
}
