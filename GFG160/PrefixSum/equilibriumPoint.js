// Given an array of integers arr[], the task is to find the first equilibrium point in the array.

// The equilibrium point in an array is an index (0-based indexing)
//  such that the sum of all elements before that index is the same as the sum of elements after it. Return -1 if no such point exists.

// Input: arr[] = [1, 2, 0, 3]
// Output: 2
// Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 3.
// Input: arr[] = [1, 1, 1, 1]
// Output: -1
// Explanation: There is no equilibrium index in the array.
// Input: arr[] = [-7, 1, 5, 2, -4, 3, 0]
// Output: 3
// Explanation: The sum of left of index 3 is -7 + 1 + 5 = -1 and sum on right of index 3 is -4 + 3 + 0 = -1.

class Solution {
  // Function to find equilibrium point in the array.
  findEquilibrium(arr) {
    // code here

    //     let n = arr.length;

    //     let prefixSum = [];
    //     let sum = 0;
    //     for(let i = 0; i <n; i++ ){
    //         sum += arr[i];
    //         prefixSum.push(sum);

    //     }

    //     let suffixSum = [];
    //     let total = 0;

    //     for(let i = n-1; i >=0; i-- ){
    //         total += arr[i];
    //         suffixSum.unshift(total);

    //     }

    //     for(let i = 0; i < n ;i++){
    //         let diff = prefixSum[i] - suffixSum[i];

    //         if(diff===0){
    //             return i;
    //         }

    //     }
    //   return -1;

    // let totalSum = arr.reduce((acc,curr)=> acc + curr,0);

    // let leftSum = 0;

    // for(let i = 0; i < arr.length; i++){
    //     totalSum -= arr[i];

    //     if(totalSum === leftSum) return i;

    //     leftSum += arr[i];
    // }
    // return -1;

    let totalSum = arr.reduce((acc, curr) => acc + curr, 0);

    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
      let rightSum = totalSum - leftSum - arr[i];

      if (leftSum === rightSum) {
        return i;
      }

      leftSum += arr[i];
    }

    return -1;
  }
}
