const dimension = [3, 2, 4, 2, 5];

const n = dimension.length;
let dp = Array.from({ length: n }, () => Array(n).fill(-1));

function matrixMulMemo(i, j, d, dp) {
  // Base case: one or no matrix
  if (i >= j) {
    return 0;
  }

  // Memoization check
  if (dp[i][j] !== -1) {
    return dp[i][j];
  }

  let minCost = Infinity;

  // Try all possible splits
  for (let k = i; k < j; k++) {
    let cost =
      matrixMulMemo(i, k, d, dp) +
      matrixMulMemo(k + 1, j, d, dp) +
      d[i - 1] * d[k] * d[j];

    minCost = Math.min(minCost, cost);
  }

  dp[i][j] = minCost;
  return dp[i][j];
}

// Correct call
const result = matrixMulMemo(1, dimension.length - 1, dimension, dp);
console.log(result); // 58
