function countVowels(str) {
  if (typeof str !== "string") return 0;

  let count = 0;
  let vowels = [..."aeiouAEIOU"];

  for (let i = 0; i <= str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) count++;
  }
  return count;
}

// console.log(countVowels("abcd"));
// console.log(countVowels(null));

function reverseStr(str) {
  if (typeof str !== "string") return "";
  result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str.charAt(i));
  }

  return result.join("");
  //   return result.toString();
}

// console.log(reverseStr("abc"));
// console.log(reverseStr(null));

function reverseWords(sent) {
  if (typeof sent !== "string") return "";
  let words = sent.trim().split(" ");
  let reverseWords = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reverseWords.push(words[i]);
  }

  return reverseWords.join(" ");
}

// console.log(reverseWords("Hello How are you"));
// console.log(reverseWords(null));

function areRotations(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;
  return str1.length === str2.length && (str1 + str1).includes(str2);
}

// console.log(areRotations("abcd", "dabc"));

// console.log(areRotations("abcd", "dacb"));

// console.log(("abc" + "abc").includes("bca"));

function removeDuplicates(str) {
  if (typeof str !== "string") return "";
  let output = [];

  let seen = new Set();
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!seen.has(ch)) {
      seen.add(ch);
      output.push(ch);
    }
  }
  return output.join("");
}

// console.log(removeDuplicates("finding"));

function getMaxOccuringChar(str) {
  if (typeof str != "string") return -1;
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (map.has(ch)) {
      map.set(ch, (map.get(ch) || 0) + 1);
    } else {
      map.set(ch, 1);
    }
  }

  let maxChar = "";
  let maxCount = 0;

  for (let [ch, count] of map) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = ch;
    }
  }
  return maxChar;
}

// console.log(getMaxOccuringChar("abcd deadaa"));

function getMaxOccuringCharHt(str) {
  if (typeof str != "string") return "";

  let ASCII_SIZE = 256;
  let freq = new Array(ASCII_SIZE).fill(0);
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let asciiCode = ch.charCodeAt(0);
    freq[asciiCode]++;
  }

  let max = 0;
  let maxCharIndex = 0;

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > max) {
      max = freq[i];
      maxCharIndex = i;
    }
  }
  return String.fromCharCode(maxCharIndex);
}

// console.log(getMaxOccuringCharHt("abcda aad bdre"));

function capitalize(sent) {
  if (typeof sent !== "string") return "";
  let words = sent.trim().replaceAll(/ +/g, " ").split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].substring(0, 1).toUpperCase() +
      words[i].substring(1).toLowerCase();
  }
  return words.join(" ");
}

// console.log(capitalize("hello how     are you    "));

function isAnagram(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;
  let arr1 = [...str1];
  arr1.sort();
  let arr2 = [...str2];
  arr2.sort();

  return arr1.every((el, index) => el === arr2[index]);
}

function isAnagram3(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}

function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;
  let ENGLISH_ALPHABET = 26;
  let ht = new Array(ENGLISH_ALPHABET).fill(0);

  str1 = str1.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    let asciiCode = ch.charCodeAt(0);
    let index = asciiCode - 97;

    ht[index]++;
  }

  str2 = str2.toLowerCase();

  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];

    let asciiCode = ch.charCodeAt(0);

    let index = asciiCode - 97;

    ht[index]--;

    if (ht[index] < 0) {
      return false;
    }
  }

  return true;
}

function isAnagram4(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = {};

  for (let ch of str1.toLowerCase()) {
    map[ch] = (map[ch] || 0) + 1;
  }
  for (let ch of str2.toLowerCase()) {
    if (!map[ch]) return false;
    map[ch]--;
  }
  return true;
}
// console.log(isAnagram4("medical", "decimal"));

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("kanak"));

// let x = "abc".split(""); // ['a','b','c']
// let y = "abc".split(""); // ['a','b','c']

// console.log(x === y);       // false (arrays are references)
// console.log(x.join("") === y.join("")); // true (strings compared by value)
