// 76. Minimum Window Substring
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let n = s.length;
  if (t.length > n) return "";

  let map = new Map();

  for (let ch of t) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  let left = 0;
  let requiredCount = t.length;
  let minWindowSize = Infinity;
  let startIdx = 0;

  for (let right = 0; right < n; right++) {
    let ch = s[right];

    if (map.has(ch) && map.get(ch) > 0) {
      requiredCount--;
    }

    map.set(ch, (map.get(ch) || 0) - 1);

    while (requiredCount === 0) {
      let windowSize = right - left + 1;

      if (windowSize < minWindowSize) {
        minWindowSize = windowSize;
        startIdx = left;
      }

      let leftChar = s[left];
      map.set(leftChar, (map.get(leftChar) || 0) + 1);

      if (map.get(leftChar) > 0) {
        requiredCount++;
      }

      left++;
    }
  }

  return minWindowSize === Infinity
    ? ""
    : s.substring(startIdx, startIdx + minWindowSize);
};
