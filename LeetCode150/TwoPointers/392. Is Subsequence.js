// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string
//  by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
//  (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence.
// In this scenario, how would you change your code?

var isSubsequenceMethod1 = function (s, t) {
  let m = s.length;
  let n = t.length;

  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === m;
};
var isSubsequence = function (s, t) {
  let map = new Map();

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) map.set(t[i], []);
    map.get(t[i]).push(i);
  }

  let prev = -1;

  for (let ch of s) {
    if (!map.has(ch)) return false;
    let indices = map.get(ch);

    let pos = upperBound(indices, prev);

    if (pos === indices.length) return false;

    prev = indices[pos];
  }
  return true;
};

function upperBound(arr, target) {
  let l = 0;
  let r = arr.length;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] <= target) l = mid + 1;
    else r = mid;
  }
  return l;
}
