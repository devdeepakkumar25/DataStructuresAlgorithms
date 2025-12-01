function fun1(n) {
  if (n === 0) return;
  console.log(n);
  fun1(n - 1);
}

// fun1(5);

function fun2(n) {
  if (n > 0) {
    fun2(n - 1);
    console.log(n);
  }
}

// console.log("Second Funcion");
// fun2(5);

function fun3(n) {
  if (n > 0) {
    return fun3(n - 1) + n;
  }
  return 0;
}

// console.log(fun3(5));

var x = 0;
function fun4(n) {
  if (n > 0) {
    x++;
    return fun4(n - 1) + x;
  }

  return 0;
}

// console.log(fun4(5));

function tail(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

// tail(5);

function head(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}

// head(5);

function treeRec(n) {
  if (n > 0) {
    console.log(n);
    treeRec(n - 1);
    treeRec(n - 1);
  }
}

// treeRec(3);

function indirectFunA(n) {
  if (n > 0) {
    console.log(n);
    indirectFunB(n - 1);
  }
}

function indirectFunB(n) {
  if (n > 1) {
    console.log(n);
    indirectFunA(Math.floor(n / 2));
    // indirectFunA(n / 2);
  }
}

// indirectFunA(20);

function nestedRec(n) {
  if (n > 100) return n - 10;
  return nestedRec(nestedRec(n + 11));
}

// console.log(nestedRec(95));

function sumOfN(n) {
  return Math.ceil((n * (n + 1)) / 2);
}

// console.log(sumOfN(10));

function sumOfNLoop(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumOfNLoop(10));

function sumOfNRec(n) {
  if (n === 0) return 0;
  return sumOfNRec(n - 1) + n;
}

// console.log(sumOfNRec(10));

function factLoop(n) {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
}

// console.log(factLoop(5));

function factRec(n) {
  if (n === 0) return 1;
  return n * factRec(n - 1);
}

// console.log(factRec(5));

function powerRec(m, n) {
  if (n === 0) return 1;
  return m * powerRec(m, n - 1);
}

// console.log(powerRec(2, 10));

function powerFun(m, n) {
  if (n === 0) return 1;
  if (n % 2 === 0) return powerFun(m * m, Math.floor(n / 2));
  return m * powerFun(m * m, Math.floor(n / 2));
}

// console.log(powerFun(2, 9));

function taylorSeries(x, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    let fact = factLoop(i);
    let power = powerFun(x, i);
    result += power / fact;
  }
  return result;
}

// console.log(taylorSeries(1,10))
var p = 1;
var f = 1;

function taylorSeriesRec(x, n) {
  if (n === 0) {
    return 1;
  } else {
    let r = taylorSeriesRec(x, n - 1);
    p = p * x;
    f = f * n;
    return r + p / f;
  }
}
// console.log(taylorSeriesRec(1, 10));

function taylorSeriesRecFun(x, n) {
  let power = 1;
  let fact = 1;
  function helper(x, k) {
    if (k === 0) return 1;
    else {
      const r = helper(x, k - 1);
      power = power * x;
      fact = fact * k;
      return r + power / fact;
    }
  }
  return helper(x, n);
}
// console.log(taylorSeriesRecFun(1, 10));

function taylorSeriesIte(x, n) {
  let s = 1;
  for (let i = n; i > 0; i--) {
    s = 1 + (x / i) * s;
  }
  return s;
}

// console.log(taylorSeriesIte(1, 10));

function taylorSeriesHornerRules(x, n) {
  let s = 1;
  function helper(x, k) {
    if (k === 0) return s;
    s = 1 + (x / k) * s;
    return helper(x, k - 1);
  }
  return helper(x, n);
}

// console.log(taylorSeriesHornerRules(1, 10));

function taylorSeriesHornerRules(x, n, s = 1) {
  if (n === 0) return s;
  s = 1 + (x / n) * s;
  return taylorSeriesHornerRules(x, n - 1, s);
}

// console.log(taylorSeriesHornerRules(1, 10));

function fib(n) {
  let a = 0;
  let b = 1;
  if (n <= 1) return n;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// console.log(fib(7));

function fibRec(n) {
  if (n <= 1) return n;
  return fibRec(n - 2) + fibRec(n - 1);
}

// console.log(fibRec(7));

function fibRecFun(n) {
  const dp = new Array(n + 1).fill(-1);

  function helper(k) {
    if (k <= 1) {
      dp[k] = k;
      return k;
    } else {
      if (dp[k - 2] === -1) dp[k - 2] = helper(k - 2);
      if (dp[k - 1] === -1) dp[k - 1] = helper(k - 1);
    }
    return dp[k - 2] + dp[k - 1];
  }
  return helper(n);
}

// console.log(fibRecFun(7));

function initialize2DArray(rows, cols) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

// console.log(initialize2DArray(2, 2));

const rows = 3;
const cols = 4;

const arr = Array.from({ length: rows }, () => Array(cols).fill(-1));

// console.log(arr);

let value = 1;
const arr2 = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => value++)
);

console.log(arr2);

const arr3 = Array.from({ length: 5 }, () => []);

console.log(arr3);

const arr4 = [...Array(rows)].map(() => Array(cols).fill(1));

console.log(arr4);

function ncr(n, r) {
  if (n === r || r === 0) {
    return 1;
  }
  return ncr(n - 1, r - 1) + ncr(n - 1, r);
}

console.log(ncr(3, 2));

function toh(n, a, b, c) {
  if (n > 0) {
    toh(n - 1, a, c, b);
    console.log(a, c);
    toh(n - 1, b, a, c);
  }
}

toh(3, 1, 2, 3);
