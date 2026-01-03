let dimension = [3, 2, 4, 2, 5];

function matrixMul(i, j, d) {
  if (i >= j) return 0;

  let minCost = Infinity;

  for (let k = i; k < j; k++) {
    let cost =
      matrixMul(i, k, d) + matrixMul(k + 1, j, d) + d[i - 1] * d[k] * d[j];

    if (cost < minCost) minCost = cost;
  }

  return minCost;
}

const result = matrixMul(1, dimension.length - 1, dimension);

console.log(result);
