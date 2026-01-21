// Leet Code 498 : Diagonal Traverse

// Given an m x n matrix mat, return an array of
//  all the elements of the array in a diagonal order.

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]

function findDiagonalOrder(mat) {
  let m = mat.length;
  let n = mat[0].length;

  let map = new Map();

  let result = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let key = i + j;
      if (!map.has(key)) {
        map.set(key, []);
      }

      map.get(key).push(mat[i][j]);
    }
  }

  for (let d = 0; d <= m + n - 2; d++) {
    let diagonal = map.get(d);
    if (d % 2 !== 0) {
      result.push(...diagonal);
    } else {
      diagonal.reverse();
      result.push(...diagonal);
    }
  }
  return result;
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result = findDiagonalOrder(mat);
console.log(result);
