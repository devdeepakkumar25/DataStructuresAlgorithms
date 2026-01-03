let p = [6, 5, 3, 8];
let w = [1, 2, 1, 2];
let capacity = 5;

let dp = Array.from({ length: p.length }, () => Array(capacity + 1).fill(-1));

function knapMemo(n, m, p, w, dp) {
  if (n < 0 || m === 0) {
    return 0;
  }

  if (dp[n][m] !== -1) {
    return dp[n][m];
  }

  if (w[n] <= m) {
    let no = knapMemo(n - 1, m, p, w, dp);
    let yes = knapMemo(n - 1, m - w[n], p, w, dp) + p[n];

    dp[n][m] = Math.max(no, yes);
  } else {
    dp[n][m] = knapMemo(n - 1, m, p, w, dp);
  }
  return dp[n][m];
}

let result = knapMemo(p.length - 1, capacity, p, w, dp);

console.log(result);
