let p = [6, 5, 3, 8];
let w = [1, 2, 1, 2];
let capacity = 5;

function knap(n, m, p, w) {
  // Base case
  if (n < 0 || m === 0) {
    return 0;
  }

  // If current item is too heavy
  if (w[n] > m) {
    return knap(n - 1, m, p, w);
  }

  // Include or exclude current item
  let no = knap(n - 1, m, p, w);
  let yes = knap(n - 1, m - w[n], p, w) + p[n];

  return no > yes ? no : yes;
}

// Run
let result = knap(p.length - 1, capacity, p, w);
console.log(result); // 16
