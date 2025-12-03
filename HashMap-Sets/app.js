function noRepeatedChar(str) {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  console.log(map);

  //   for (let i = 0; i < str.length; i++) {
  //     let ch = str[i];

  for (let ch of str) {
    if (map.get(ch) === 1) {
      return ch;
    }
  }
  return null;
}

let str = "A Green Apple";

console.log(noRepeatedChar(str));

function firstRepeatingChar(str) {
  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (set.has(ch)) {
      return ch;
    }
    set.add(ch);
  }
  return null;
}

console.log(firstRepeatingChar(str));
