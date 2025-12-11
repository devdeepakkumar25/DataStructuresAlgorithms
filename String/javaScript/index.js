function stringLength(st) {
  let count = 0;
  for (let ch of st) {
    count++;
  }
  return count;
}

// console.log(stringLength("Abc"));

function changingCase(st) {
  let result = [];

  for (let i = 0; i < st.length; i++) {
    // let asciiCode = st[i].charCodeAt(0) - 32;
    let asciiCode = st[i].charCodeAt(0) - 32;

    alpha = String.fromCodePoint(asciiCode);

    result.push(alpha);
  }
  return result.join("");
}

// console.log(changingCase("abc"));

function toggleCase(st) {
  const result = [];

  for (let i = 0; i < st.length; i++) {
    let ch = st[i];
    let asciiCode = ch.charCodeAt(0);

    if (asciiCode >= 65 && asciiCode <= 90) {
      let char = String.fromCodePoint(asciiCode + 32);
      result.push(char);
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      let char = String.fromCodePoint(asciiCode - 32);
      result.push(char);
    } else {
      result.push(ch);
    }
  }
  return result.join("");
}

// console.log(toggleCase("ABCdef"));

// console.log("a".charCodeAt(0));

// console.log(String.fromCodePoint(65));

function countVowels(st) {
  let vcount = 0;
  let ccount = 0;

  let vowels = new Set("aeiouAEIOU");
  for (let i = 0; i < st.length; i++) {
    if (vowels.has(st[i])) {
      vcount++;
    } else {
      let ch = st[i];
      let asciiCode = ch.charCodeAt(0);

      if (
        (asciiCode >= 65 && asciiCode <= 90) ||
        (asciiCode >= 97 && asciiCode <= 122)
      ) {
        ccount++;
      }
    }
  }
  return { vcount: vcount, ccount: ccount };
}

// console.log(countVowels("abcdefHe"));

function countWords(st) {
  let word = 0;

  let i = 0;

  let n = st.length;

  while (i < n) {
    if (i < n && st[i] === " ") i++;

    if (i < n && st[i] !== " ") word++;

    while (i < n && st[i] !== " ") i++;
  }
  return word;
}

// console.log(countWords("Hello How are you"));

function validateString(st) {
  for (let i = 0; i < st.length; i++) {
    let ch = st[i];
    let asciiCode = ch.charCodeAt(0);

    if (
      !(
        (asciiCode >= 65 && asciiCode <= 90) ||
        (asciiCode >= 97 && asciiCode <= 122) ||
        (asciiCode >= 48 && asciiCode <= 57)
      )
    )
      return false;
  }

  return true;
}

// console.log(validateString("abcd234@"));

function reverseString(st) {
  let resultArr = [];

  for (i = st.length - 1; i >= 0; i--) {
    resultArr.push(st[i]);
  }

  return resultArr.join("");
}

// console.log(reverseString("abcd"));

function isPalindrome(st) {
  let i = 0;
  let n = st.length - 1;

  while (i < n) {
    if (st[i] !== st[n]) return false;
    i++;
    n--;
  }
  return true;
}

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("kanak"));

function isDuplicate(st) {
  let set = new Set(st);
  console.log(set);
  console.log(set.size);
  return set.size !== st.length;
}

// console.log(isDuplicate("finding"));
// console.log(isDuplicate("abcdef"));

function isDuplicateHt(st) {
  let ht = new Array(26).fill(0);
  let result = [];
  for (let i = 0; i < st.length; i++) {
    let ch = st[i];
    let asciiCode = ch.charCodeAt(0);
    ht[asciiCode - 97]++;
  }
  for (let i = 0; i < ht.length; i++)
    if (ht[i] > 1) result.push(String.fromCharCode(i + 97));

  return result;
}

// console.log(isDuplicateHt("kanak"));

function powerOf2toThePower(n) {
  return 1 << n;
}

// console.log(powerOf2toThePower(8));

function isDuplicateUsingBit(st) {
  let H = 0;

  let result = [];

  for (i = 0; i < st.length; i++) {
    let x = 1;
    let ch = st[i];
    let asciiCode = ch.charCodeAt(0);

    x = x << (asciiCode - 97);

    if (x & H) {
      result.push(ch);
    } else {
      H = x | H;
    }
  }
  return result;
}

// console.log(isDuplicateUsingBit("finding"));

function isAnagram(st1, st2) {
  st1 = st1.toLowerCase();
  st2 = st2.toLowerCase();
  let ht = new Array(26).fill(0);

  if (st1.length !== st2.length) return false;

  for (let i = 0; i < st1.length; i++) {
    let ch = st1[i];
    let asciiCode = ch.charCodeAt(0);
    ht[asciiCode - 97]++;
  }

  for (let i = 0; i < st2.length; i++) {
    let ch = st2[i];
    let asciiCode = ch.charCodeAt(0);

    ht[asciiCode - 97]--;

    if (ht[asciiCode - 97] < 0) return false;
  }
  return true;
}

// console.log(isAnagram("medical", "decimal"));

function permutations(str) {
  const used = new Array(str.length).fill(false);
  const result = new Array(str.length);

  function backtrack(pos) {
    // When pos == str.length, we have one full permutation
    if (pos === str.length) {
      console.log(result.join(""));
      return;
    }

    for (let i = 0; i < str.length; i++) {
      if (!used[i]) {
        used[i] = true;
        result[pos] = str[i];

        backtrack(pos + 1);

        used[i] = false; // undo choice (backtrack)
      }
    }
  }

  backtrack(0);
}

// permutations("abc");

function permutationUsingSwaping(st) {
  let s = [...st];

  function helper(s, l, h) {
    if (l === h) {
      console.log(s.join(""));
      return;
    }
    for (let i = l; i <= h; i++) {
      [s[l], s[i]] = [s[i], s[l]];
      helper(s, l + 1, h);
      [s[l], s[i]] = [s[i], s[l]];
    }
  }
  helper(s, 0, s.length - 1);
}

permutationUsingSwaping("abc");

function changingCase(st) {
  let res = [];

  for (let i = 0; i < st.length; i++) {
    let ch = st[i];

    let asciCode = ch.codePointAt(0);
    console.log(asciCode);

    if (asciCode >= 97 && asciCode <= 122) {
      res.push(String.fromCharCode(asciCode - 32));
    } else if (asciCode > 65 && asciCode <= 90) {
      res.push(String.fromCharCode(asciCode + 32));
    } else {
      res.push(ch);
    }
  }
  return res.join("");
}

let st = "abcABC234@";

console.log(changingCase(st));

function countVowels(str) {
  let count = 0;

  let set = new Set("aeiouAEIOU");

  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    // if (set.has(chr)) {
    //   count++;
    // }

    if (vowels.indexOf(chr) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("abcd"));

function reverseStr(str) {
  let res = [];
  let n = str.length - 1;

  for (let i = n; i >= 0; i--) {
    let chr = str[i];
    res.push(chr);
  }

  return res.join("");
}

console.log(reverseStr("abc"));

function reverseWords(str) {
  let res = str.trim().split(/\s+/);

  res.reverse();

  return res.join(" ");
}

console.log(reverseWords("How are    you   "));

function areRotations(str1, str2) {
  return str1.length === str2.length && (str1 + str1).includes(str2);
}

console.log(areRotations("abcd", "dabc"));
console.log(areRotations("abcd", "cdba"));

function removeDuplicates(str) {
  let output = [];
  let set = new Set();

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];

    if (!set.has(chr)) {
      output.push(chr);
      set.add(chr);
    }
  }
  return output.join("");
}

console.log(removeDuplicates("acbdedabcda"));

function mostRepeatedChar(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    map.set(chr, (map.get(chr) ?? 0) + 1);
  }

  let maxNum = 0;

  let chr = "";

  for (let [char, value] of map.entries()) {
    if (value > maxNum) {
      maxNum = value;
      chr = char;
    }
  }

  return { character: chr, max: maxNum };
}

console.log(mostRepeatedChar("abcdaescaaa vbasea"));

function mostRepeatedCharHash(str) {
  let ht = new Array(256).fill(0);

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    let asciCode = chr.charCodeAt(0);
    ht[asciCode]++;
  }

  let maxNum = 0;
  let index = 0;

  for (let i = 0; i < ht.length; i++) {
    if (ht[i] > maxNum) {
      maxNum = ht[i];
      index = i;
    }
  }

  return { character: String.fromCodePoint(index), max: maxNum };
}

console.log(mostRepeatedCharHash("abcdeadca"));

function capitalizeWord(sent) {
  // let words = sent.trim().split(/\s+/);
  let words = sent.trim().replaceAll(/ +/g, " ").split();

  for (let i = 0; i < words.length; i++) {
    // words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    words[i] =
      words[i].substring(0, 1).toUpperCase() +
      words[i].substring(1).toLowerCase();
  }

  return words.join(" ");
}

console.log(capitalizeWord("how    are you"));

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let arr1 = str1.toLowerCase().split("").sort();
  let arr2 = str2.toLowerCase().split("").sort();

  return arr1.join("") === arr2.join("") ? true : false;
}

console.log(isAnagram("abc", "cba"));

function isAnagramUsingHash(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let ht = new Array(26).fill(0);

  for (let chr of str1) {
    let asciCode = chr.charCodeAt(0);

    ht[asciCode - 97]++;
  }

  for (let chr of str2) {
    let asciCode = chr.charCodeAt(0);
    ht[asciCode - 97]--;

    if (ht[asciCode - 97] < 0) {
      return false;
    }
  }
  return true;
}

console.log(isAnagramUsingHash("abcd", "bcdda"));

function isPalindrom(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrom("kanak", "kanak"));
