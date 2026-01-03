let p = [6, 5, 3, 8];
let w = [1, 2, 1, 2];

let capacity = 5;

function knap(p, w, capacity) {
  let n = p.length;

  let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (w[i - 1] <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i - 1]] + p[i - 1]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][capacity];
}

const result = knap(p, w, capacity);

console.log(result);
