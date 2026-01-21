// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;

  let n = s.length;

  let seen = new Set();

  let start = 0;
  let maxLen = 0;

  while (j < n) {
    if (!seen.has(s[j])) {
      seen.add(s[j]);

      if (j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        start = i;
      }
      j++;
    } else {
      seen.delete(s[i]);
      i++;
    }
  }
  console.log(s.substring(start, start + maxLen));

  return maxLen;
};

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let n = s.length;
//     let ans = 0;
//     let map = new Map();
//     let i = 0;
//     for(let j = 0; j < n; j++){
//         if(map.get(s[j]) > 0){
//             i = Math.max(map.get(s[j]),i);
//             }
//              ans = Math.max(ans,j - i +1);
//              map.set(s[j],j + 1);
//              }
//        return ans;
// }
// var lengthOfLongestSubstring = function(s) {
//     let n = s.length;
//     let ans = 0;
//     let map = new Map();
//     let i = 0;
//     let star = 0;
//     for(let j = 0; j < n; j++){

//         if (map.has(s[j]) && map.get(s[j]) >= i) {
//             i = map.get(s[j]) + 1;
//         }

//         if(j - i + 1 > ans){
//             ans = j - i + 1;
//             start = i;
//         }

//         map.set(s[j],j);
//     }
//     console.log(s.substring(start,start+ ans))
//     return ans;
// };

// var lengthOfLongestSubstring = function(s) {

//     let n = s.length;

//     let ans = 0;

//     let str = "";

//     for(let i = 0; i < n; i++){
//         for(let j = i; j < n; j++){
//             if(checkRepetition(s,i,j)){
//                 let len = j - i + 1;
//                 if(len > ans){
//                     ans = len;
//                     str = s.substring(i,j +1);

//                 }
//             }else {
//                 break;
//             }
//         }
//     }
//     console.log(str);
//     return ans;
// };

// function checkRepetition(s,start,end){
//     let set = new Set();

//     for(let i = start; i <= end; i++){
//         let c = s[i];
//         if(set.has(c)) return false;

//         set.add(c);
//     }

//     return true;
// }
