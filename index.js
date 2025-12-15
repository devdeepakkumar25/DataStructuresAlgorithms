let guid = "9d07feb3-0ef3-4f3a-812b-7ddb409e7877";

function getNumber(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    let ascicode = chr.charCodeAt(0);

    if (ascicode >= 48 && ascicode <= 57) {
      res.push(chr);
    }
  }
  return res.join("");
}

function getChar(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    let ascicode = chr.charCodeAt(0);

    if (
      (ascicode >= 65 && ascicode <= 90) ||
      (ascicode >= 97 && ascicode <= 122)
    ) {
      res.push(chr);
    }
  }
  return res.join("");
}

function getSpecialChar(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    let ascicode = chr.charCodeAt(0);

    if (
      !(
        (ascicode >= 65 && ascicode <= 90) ||
        (ascicode >= 97 && ascicode <= 122) ||
        (ascicode >= 48 && ascicode <= 57)
      )
    ) {
      res.push(chr);
    }
  }

  return res.join("");
}

let char = getChar(guid);

console.log(char);

let specialChar = getSpecialChar(guid);

console.log(specialChar);

let number = getNumber(guid);

console.log(number);

function getMinSUbset(str) {
  let minres = 0;
  let seen = new Set();

  let prev_index = 0;
  let next_index = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!seen.has(char)) {
      seen.add(char);
    } else {
      next_index = i;

    }

  }
}
