let dimension = [3, 2, 4, 2, 5];

function matrixMulTab(d) {
  const n = d.length;

  // dp[i][j] = min cost to multiply matrices Ai to Aj
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  // length is the chain length
  for (let length = 2; length < n; length++) {
    for (let i = 1; i <= n - length; i++) {
      let j = i + length - 1;
      dp[i][j] = Infinity;

      for (let k = i; k < j; k++) {
        const cost = dp[i][k] + dp[k + 1][j] + d[i - 1] * d[k] * d[j];

        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }

  return dp[1][n - 1];
}

const result = matrixMulTab(dimension);
console.log(result);
