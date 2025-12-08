
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

s = "ADOBECODEBANC";
t = "ABC";

console.log(minWindow(s, t));
