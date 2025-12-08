// let sum = (n) => {
//   if (n === 0) return 0;
//   return n + sum(n - 1);
// };

// let sum = (n) => (n * (n + 1)) / 2;

// console.log(sum(5));

// let fact = (n) => {
//   let f = 1;

//   while (n > 0) {
//     f *= n;
//     n--;
//   }
//   return f;
// };

// console.log(fact(5));

// let fact = (n) => {
//   if (n === 0) return 1;
//   return n * fact(n - 1);
// };

// console.log(fact(5));

// let power = (n, m) => {
//   let res = 1;
//   for (let i = 1; i <= m; i++) {
//     res *= n;
//   }
//   return res;
// };

// console.log(power(2, 10));

// let power = (n, m) => {
//   if (m === 0) return 1;

//   return n * power(n, m - 1);
// };

// console.log(power(2, 10));

// let power = (n, m) => {
//   if (m === 0) return 1;

//   if (m % 2 === 0) return power(n * n, Math.floor(m / 2));

//   return n * power(n * n, Math.floor((m - 1) / 2));
// };

// console.log(power(2, 10));

// function exp(x, n) {
//   let p = 1;
//   let f = 1;

//   function helper(x, n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       let r = helper(x, n - 1);
//       p = p * x;
//       f = f * n;

//       return r + p / f;
//     }
//   }

//   return helper(x, n);
// }

// console.log(exp(1, 4));

// function exp(x, n) {
//   let s = 1;

//   for (let i = n; n > 0; n--) {
//     s = 1 + (x / n) * s;
//   }
//   return s;
// }

// console.log(exp(1, 4));

// function exp(x, n) {
//   let s = 1;
//   function helper(x, n) {
//     if (n === 0) return s;

//     s = 1 + (x / n) * s;

//     return helper(x, n - 1);
//   }

//   return helper(x, n);
// }

// console.log(exp(1, 4));

// function fib(n) {
//   let a = 0;
//   let b = 1;

//   for (let i = 2; i <= n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return b;
// }

// console.log(fib(7));

// function fib(n) {
//   if (n <= 1) return n;

//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(5));

// console.log(fib(7));

// function fib(n) {
//   dp = new Array(n + 1).fill(-1);

//   function helper(n, dp) {
//     if (n === 0 || n === 1) {
//       dp[n] = n;
//       return dp[n];
//     }
//     if (dp[n - 2] === -1) {
//       dp[n - 2] = helper(n - 2, dp);
//     }

//     if (dp[n - 1] === -1) {
//       dp[n - 1] = helper(n - 1, dp);
//     }

//     return (dp[n] = dp[n - 1] + dp[n - 2]);
//   }

//   console.log(dp);
//   return helper(n, dp);
// }

// console.log(fib(7));

// function ncr(n, r) {
//   if (r === 0 || n === r) return 1;

//   return ncr(n - 1, r - 1) + ncr(n - 1, r);
// }

// console.log(ncr(4, 2));

// function reverseArr(arr) {
//   let i = 0;
//   let j = arr.length - 1;

//   while (i < j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j--;
//   }
// }

// let arr = [1, 2, 3, 5, 6];

// reverseArr(arr);

// console.log(arr);

// function leftShiftarr(arr) {
//   let temp = arr[0];

//   let n = arr.length - 1;
//   for (let i = 1; i < n; i++) {
//     arr[i - 1] = arr[i];
//   }

//   arr[n] = temp;
// }

// leftShiftarr(arr);

// console.log(arr);

// function rightShiftArr(arr) {
//   let n = arr.length - 1;
//   let temp = arr[n];

//   for (let i = n; i >= 0; i--) {
//     arr[i] = arr[i - 1];
//   }

//   arr[0] = temp;
// }

// let arr = [1, 2, 3, 5, 6];
// rightShiftArr(arr);

// console.log(arr);

// function insertInSortedArr(arr, key) {
//   let j = arr.length - 1;

//   while (arr[j] > key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }

//   arr[j + 1] = key;
// }

// insertInSortedArr(arr, 4);

// console.log(arr);

// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] > arr[i]) return false;
//   }
//   return true;
// }

// console.log(isSorted(arr));

// let nums = [2, 3, 4, 0, -1, 2, 3, 9, -9, 10, 2, -1];

// function arrangeVeSide(arr) {
//   let i = 0;
//   let n = arr.length - 1;
//   let j = n;

//   while (i < j) {
//     while (arr[i] < 0) {
//       i++;
//     }

//     while (arr[j] > 0) {
//       j--;
//     }

//     if (i < j) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }

// console.log(nums);
// arrangeVeSide(nums);

// console.log(nums);

// function mergeArr(arr1, arr2) {
//   let i = 0;
//   let j = 0;

//   let n = arr1.length;
//   let m = arr2.length;

//   let k = 0;

//   let res = [];

//   while (i < n && j < m) {
//     if (arr1[i] < arr2[j]) {
//       res.push(arr1[i++]);
//     } else {
//       res.push(arr2[j++]);
//     }
//   }

//   while (i < n) {
//     res.push(arr1[i++]);
//   }

//   while (j < m) {
//     res.push(arr2[j++]);
//   }
//   return res;
// }

// let arr1 = [1, 2, 3, 4, 5, 8, 9];
// let arr2 = [3, 5, 6, 7, 10];

// console.log("Merge Array");
// console.log(mergeArr(arr1, arr2));

// function missingEle(arr) {
//   let sum = arr.reduce((acc, curr) => acc + curr, 0);
//   let n = arr[arr.length - 1];

//   let total = (n * (n + 1)) / 2;

//   return total - sum;
// }

// let arr = [1, 2, 3, 4, 5, 7, 9, 10];

// console.log(missingEle(arr));

// function missingEle(arr) {
//   let diff = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] - i !== diff) {
//       return i + diff;
//     }
//   }

//   return -1;
// }

// console.log(missingEle(arr));

// function multipleMissingEle(arr) {
//   let diff = arr[0];
//   let i = 0;
//   let n = arr.length;

//   while (i < n) {
//     if (arr[i] - i !== diff) {
//       while (arr[i] - i !== diff) {
//         console.log("Missing Ele: ", i + diff);

//         diff++;
//       }
//     }
//     i++;
//   }
// }

// multipleMissingEle(arr);

// function missingInUnsortedArray(arr) {
//   let max = Math.max(...arr);

//   let ht = new Array(max + 1).fill(0);

//   for (let i = 0; i < arr.length; i++) {
//     ht[arr[i]]++;
//   }

//   for (let j = 0; j < ht.length; j++) {
//     if (ht[j] === 0) {
//       console.log("Missing Element is : ", j);
//     }
//   }
// }

// let arr = [1, 2, 4, 6, 8, 10];

// missingInUnsortedArray(arr);

// let arr = [3, 6, 8, 8, 10, 12, 15, 15, 15, 20];

// function duplicateEle(arr) {
//   let lastDuplicate = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] === arr[i] && arr[i] !== lastDuplicate) {
//       lastDuplicate = arr[i - 1];
//       console.log("Duplicate Element is : ", arr[i - 1]);
//     }
//   }
// }

// duplicateEle(arr);

// function countDuplicate(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] === arr[i]) {
//       j = i - 1;

//       while (arr[i] === arr[j]) {
//         j++;
//       }
//       console.log(`${arr[i]} is appearing ${j - i + 1} times`);
//       i = j - 1;
//     }
//   }
// }

// countDuplicate(arr);

// function findDuplicateIn(arr) {
//   let max = Math.max(...arr);

//   // let ht = new Array(max+1).fill(0);
//   let ht = Array.from({ length: max + 1 }, () => 0);

//   for (let i = 0; i < arr.length; i++) {
//     ht[arr[i]]++;
//   }

//   for (let j = 0; j < ht.length; j++) {
//     if (ht[j] > 1) {
//       console.log(`${j} is duplicates Element and appearing ${ht[j]} times`);
//     }
//   }
// }

// findDuplicateIn(arr);

// function pairSum(arr, k) {
//   let i = 0;
//   let j = arr.length - 1;

//   while (i < j) {
//     if (arr[i] + arr[j] === k) {
//       console.log(`${arr[i]} + ${arr[j]} = ${k}`);
//       i++;
//       j--;
//     } else if (arr[i] + arr[j] > k) {
//       j--;
//     } else {
//       i++;
//     }
//   }
// }

// let arr = [6, 3, 8, 10, 16, 7, 5, 2, 9, 14];
// arr.sort((a, b) => a - b);

// console.log(arr);

// pairSum(arr, 10);

// function pairSumHash(arr, k) {
//   let max = Math.max(...arr);
//   let ht = Array.from({ length: max + 1 }, () => 0);

//   for (let i = 0; i < arr.length; i++) {
//     let index = k - arr[i];
//     if (index >= 0 && ht[index] !== 0) {
//       console.log(`${arr[i]} + ${k - arr[i]} = ${k}`);
//     }
//     ht[arr[i]]++;
//   }
// }

// let arr = [6, 3, 8, 10, 16, 7, 5, 2, 9, 14];

// pairSumHash(arr, 10);

// function minMaxEle(arr) {
//   let min = arr[0];

//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return { min, max };
// }

// console.log(minMaxEle(arr));
