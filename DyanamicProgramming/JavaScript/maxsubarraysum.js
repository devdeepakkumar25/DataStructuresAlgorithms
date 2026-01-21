function maxSubarraySumItr(arr) {
  let maxSum = -Infinity;
  let start = -1;
  let end = -1;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum > maxSum) {
        maxSum = sum;
        start = i;
        end = j;
      }
      //   maxSum = Math.max(maxSum, sum);
    }
  }
  console.log(arr.slice(start, end + 1));
  return maxSum;
}

function maxSubarraySumMethod2(arr) {
  let maxSum = -Infinity;
  let start = -1;
  let end = -1;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
        start = i;
        end = j;
      }
    }
  }
  console.log(arr.slice(start, end + 1));
  return maxSum;
}

let arr = [4, -5, 8, -2, -1, 7, -6];
let arr2 = [3, -7, 10, -2, -1, 7, -11, -5, 9, 3];

// console.log(maxSubarraySumItr(arr));
// console.log(maxSubarraySumMethod2(arr));

function maxSubarraySumDp(arr) {
  let n = arr.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(0));
  let maxSum = -Infinity;

  for (let i = 0; i < n; i++) {
    dp[i][i] = arr[i];
    maxSum = Math.max(maxSum, dp[i][i]);
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + arr[j];
      maxSum = Math.max(maxSum, dp[i][j]);
    }
  }

  console.table(dp);
  //   for (let nums of dp) {
  //     let value = nums.reduce((acc, curr) => {
  //       return acc > curr ? acc : curr;
  //     });

  //     maxSum = Math.max(maxSum, value);
  //   }
  return maxSum;
}

// console.log(maxSubarraySumDp(arr));

function maxSubarraySumDpMethod2(arr) {
  let n = arr.length;
  let sum = new Array(n).fill(0);
  sum[0] = arr[0];

  for (let i = 1; i < n; i++) {
    if (sum[i - 1] < 0) {
      sum[i] = arr[i];
    } else {
      sum[i] = sum[i - 1] + arr[i];
    }
  }
  console.log(sum);
  return sum.reduce((acc, curr) => (acc > curr ? acc : curr));
}

// console.log(maxSubarraySumDpMethod2(arr2));

function kadanesMaxSubarraySum(arr) {
  let n = arr.length;
  let maxSum = arr[0];
  let prevSum = arr[0];
  let start = 0;
  let end = 0;
  let subStart = 0;
  for (let i = 1; i < n; i++) {
    if (prevSum < 0) {
      prevSum = arr[i];
      subStart = i;
    } else {
      prevSum += arr[i];
    }
    // maxSum = Math.max(prevSum, maxSum);
    if (prevSum > maxSum) {
      maxSum = prevSum;
      start = subStart;
      end = i;
    }
  }
  console.log(arr.slice(start, end + 1));
  return maxSum;
}

// console.log(kadanesMaxSubarraySum(arr2));
function kadanesMaxSubarraySum(arr) {
  let n = arr.length;

  if (n === 0) return 0;

  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < n; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// console.log(kadanesMaxSubarraySum(arr));

function crossSum(arr, l, mid, h) {
  let leftSub = -Infinity;
  let sum = 0;

  for (let i = mid; i >= l; i--) {
    sum = sum + arr[i];

    if (sum > leftSub) leftSub = sum;
  }
  let rightSub = -Infinity;

  sum = 0;

  for (let i = mid + 1; i <= h; i++) {
    sum = sum + arr[i];
    if (sum > rightSub) rightSub = sum;
  }
  return leftSub + rightSub;
}

function maxSubarraySumDivideConquer(arr, l, h) {
  if (l === h) {
    return arr[l];
  }

  let mid = Math.floor((l + h) / 2);

  let leftMax = maxSubarraySumDivideConquer(arr, l, mid);
  let rightMax = maxSubarraySumDivideConquer(arr, mid + 1, h);
  let currSum = crossSum(arr, l, mid, h);

  return Math.max(leftMax, rightMax, currSum);
}

console.log(
  "Using Divide and Conquer : ",
  maxSubarraySumDivideConquer(arr2, 0, arr.length - 1)
);

function crossSum(arr, left, mid, right) {
  let leftSum = -Infinity;
  let sum = 0;

  for (let i = mid; i >= left; i--) {
    sum += arr[i];
    leftSum = Math.max(leftSum, sum);
  }

  let rightSum = -Infinity;
  sum = 0;

  for (let i = mid + 1; i <= right; i++) {
    sum += arr[i];
    rightSum = Math.max(rightSum, sum);
  }

  return leftSum + rightSum;
}

function maxSubarraySumDivideConquer(arr, left, right) {
  if (left === right) {
    return arr[left];
  }

  const mid = Math.floor((left + right) / 2);

  const leftMax = maxSubarraySumDivideConquer(arr, left, mid);
  const rightMax = maxSubarraySumDivideConquer(arr, mid + 1, right);
  const crossMax = crossSum(arr, left, mid, right);

  return Math.max(leftMax, rightMax, crossMax);
}

// Example
// let arr2 = [4, -5, 8, -2, -1, 7, -6];

console.log(
  "Using Divide and Conquer:",
  maxSubarraySumDivideConquer(arr2, 0, arr2.length - 1)
);
