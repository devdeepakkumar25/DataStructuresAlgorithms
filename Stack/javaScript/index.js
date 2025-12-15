function reverseString(str) {
  if (str === null) {
    throw new Error("Eligile Argumnet");
  }
  let stack = [];

  for (let ch of str) {
    stack.push(ch);
  }

  let result = [];

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result.join("");
}

// let str = "abcdef";

// console.log(reverseString(str));

function isBalanced(exp) {
  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    let ch = exp[i];
    if (ch === "(" || ch === "<" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === ">" || ch === "]" || ch === "}") {
      if (stack.length === 0) return false;
      let top = stack.pop();

      if (
        (ch === ")" && top !== "(") ||
        (ch === ">" && top !== "<") ||
        (ch === "]" && top !== "[") ||
        (ch === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
}

let exp = "{{[((1+2))]}";
console.log(isBalanced(exp));

function isLeftBracket(ch) {
  return ch === "(" || ch === "<" || ch === "[" || ch === "{";
}

function isRightBracket(ch) {
  return ch === ")" || ch === ">" || ch === "]" || ch === "}";
}

function bracketMatch(left, right) {
  return (
    (left === ")" && right !== "(") ||
    (left === ">" && right !== "<") ||
    (left === "]" && right !== "[") ||
    (left === "}" && right !== "{")
  );
}

function isBalancedExp(exp) {
  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    let ch = exp[i];

    if (isLeftBracket(ch)) {
      stack.push(ch);
    } else if (isRightBracket(ch)) {
      if (stack.length === 0) return false;

      let top = stack.pop();

      if (!bracketMatch(ch, top)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalancedExp(exp));

function isBalanced(str) {
  let stack = [];

  let leftBracket = "([{<";
  let rightBracket = ")]}>";

  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    if (leftBracket.indexOf(chr) != -1) {
      stack.push(chr);
    } else if (rightBracket.indexOf(chr) !== -1) {
      if (stack.length === 0) return false;

      let left = stack.pop();
      if (leftBracket.indexOf(left) !== rightBracket.indexOf(chr)) {
        return false;
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("(({1+2)})"));
