let st1 = ["a", "b", "c"];

let st2 = ["a", "b", "c", "d", "e"];

function lcsMemo(st1, st2, i, j, dp) {
  if (i === 0 || j === 0) {
    dp[i][j] = 0;
    return 0;
  }

  if (dp[i][j] !== -1) {
    return dp[i][j];
  }

  if (st1[i - 1] === st2[j - 1]) {
    dp[i][j] = 1 + lcsMemo(st1, st2, i - 1, j - 1, dp);
  } else {
    dp[i][j] = Math.max(
      lcsMemo(st1, st2, i - 1, j, dp),
      lcsMemo(st1, st2, i, j - 1, dp)
    );
  }
  return dp[i][j];
}

let dp = Array.from({ length: st1.length + 1 }, () =>
  Array(st2.length + 1).fill(-1)
);

const result = lcsMemo(st1, st2, st1.length, st2.length, dp);

console.log(result);
