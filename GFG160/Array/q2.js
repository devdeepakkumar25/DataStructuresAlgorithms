// You are given an array arr[] of non-negative integers.
//  You have to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements.
// The operation must be performed in place, meaning you should not use extra space for another array.

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.

let moveZeroToEnd = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }
  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }
};

let moveZeroToEnd2 = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
};

let arr = [1, 2, 0, 4, 3, 0, 5, 0];

moveZeroToEnd2(arr);

console.log(arr);
