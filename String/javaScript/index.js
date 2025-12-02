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
