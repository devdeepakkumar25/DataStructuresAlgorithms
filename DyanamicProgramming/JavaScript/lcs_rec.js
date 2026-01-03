let st1 = ["a", "c", "e"];
let st2 = ["a", "b", "c", "d", "e"];

function lcs(st1, st2, i, j) {
  if (i === 0 || j === 0) {
    return 0;
  }

  if (st1[i - 1] === st2[j - 1]) {
    return 1 + lcs(st1, st2, i - 1, j - 1);
  } else {
    return Math.max(lcs(st1, st2, i - 1, j), lcs(st1, st2, i, j - 1));
  }
}

const result = lcs(st1, st2, st1.length, st2.length);

console.log(result);
