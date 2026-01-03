// let a = ["a", "c", "e"];

// let b = ["a", "b", "c", "d", "e"];

// function lcsTab(a, b) {
//   let m = a.length;
//   let n = b.length;
//   let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

//   for (let i = 0; i < n; i++) {
//     dp[0][i] = 0;
//   }

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (a[i] === b[j]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       }
//     }
//   }
//   return dp[m][n];
// }

// let result = lcsTab(a, b);

// console.log(result);

let a = ["a", "c", "e"];
let b = ["a", "b", "c", "d", "e"];

function lcsTab(a, b) {
  const m = a.length;
  const n = b.length;

  // dp[i][j] = LCS length of first i chars of a and first j chars of b
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

const result = lcsTab(a, b);
console.log(result); // 3

function getLCSFromTable(a, b, dp) {
  let i = a.length;
  let j = b.length;
  const lcs = [];

  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      lcs.push(a[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs.reverse();
}

// let a = ["a", "c", "e"];
// let b = ["a", "b", "c", "d", "e"];

function lcsWithSequence(a, b) {
  const m = a.length;
  const n = b.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Build DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find the sequence
  let i = m,
    j = n;
  const lcs = [];

  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      lcs.push(a[i - 1]); // or b[j - 1]
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return {
    length: dp[m][n],
    sequence: lcs.reverse(),
  };
}

const result1 = lcsWithSequence(a, b);
console.log(result1.length); // 3
console.log(result1.sequence); // [ 'a', 'c', 'e' ]
