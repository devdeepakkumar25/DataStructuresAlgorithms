function subsets1(arr) {
  const result = [];

  function backtrack(index, current) {
    if (index === arr.length) {
      result.push([...current]);
      return;
    }

    backtrack(index + 1, current);

    current.push(arr[index]);

    backtrack(index + 1, current);
    current.pop();
  }
  backtrack(0, []);
  return result;
}

// console.log(subsets([1, 2, 3]));

function subsetsItr(arr) {
  let result = [[]];
  for (const num of arr) {
    const newSubsets = result.map((subset) => [...subset, num]);
    result = result.concat(newSubsets);
  }
  return result;
}

// console.log(subsetsItr([1, 2, 3]));

function subsetsBitMasking(arr) {
  const n = arr.length;
  const result = [];

  for (let mask = 0; mask < 1 << n; mask++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      if (mask & 1 << i) {
        subset.push(arr[i]);
      }
    }
    result.push(subset);
  }
  return result;
}

console.log(subsetsBitMasking([1, 2, 3]));

function subsets(arr) {
  const n = arr.length;
  const result = [];

  for (let mask = 0; mask < 1 << n; mask++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subset.push(arr[i]);
      }
    }
    result.push(subset);
  }

  return result;
}

console.log(subsets([1, 2, 3]));
