function binarySearch(arr, key) {
  if (!Array.isArray(arr)) throw new Error("Passed argument is not an array");

  let low = 0;
  let high = arr.length - 1;
  return recBinarySearch(arr, low, high, key);
}

function recBinarySearch(arr, low, high, key) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (key === arr[mid]) {
    return mid;
  } else if (key < arr[mid]) {
    return recBinarySearch(arr, low, mid - 1, key);
  } else {
    return recBinarySearch(arr, mid + 1, high, key);
  }
}

// let arr = [-12, -8, -6, -1, 3, 6, 8, 11, 14, 17, 20, 22, 25, 29, 31];
// arr = null;

// console.log(binarySearch(arr, 31));

// console.log(arr.length);

function merge(arr1, arr2, res) {
  let i = 0;
  let j = 0;
  let n = arr1.length;
  let m = arr2.length;
  let k = 0;

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      res[k++] = arr1[i++];
    } else {
      res[k++] = arr2[j++];
    }
  }

  while (i < n) {
    res[k++] = arr1[i++];
  }

  while (j < n) {
    res[k++] = arr2[j++];
  }
  return res;
}

let arr1 = [3, 7, 12, 16, 20];

let arr2 = [5, 9, 13, 15, 19];

let res = [];

console.log(merge(arr1, arr2, res));

console.log(res);

function mergeArr(arr, low, mid, high) {
  let i = low;
  let j = mid + 1;

  let res = new Array(arr.length);
  let k = low;

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      res[k++] = arr[i++];
    } else {
      res[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    res[k++] = arr[i++];
  }

  while (j <= high) {
    res[k++] = arr[j++];
  }
  for (let i = low; i <= high; i++) {
    arr[i] = res[i];
  }
  // return res;
}

function iterativeMergeSort(arr) {
  let n = arr.length;
  let lastSize = 0;

  for (let size = 1; size <= Math.floor(n / 2); size = size * 2) {
    lastSize = size;

    let low = 0;

    while (low + 2 * size - 1 < n) {
      let mid = low + size - 1;
      let high = low + 2 * size - 1;

      mergeArr(arr, low, mid, high);

      low = low + 2 * size;
    }
  }

  // handle remaining elements (odd length / not power of 2)
  if (2 * lastSize < n) {
    mergeArr(arr, 0, lastSize * 2 - 1, n - 1);
  }
}

function iterativeMergeSort(arr) {
  let n = arr.length;

  for (let size = 1; size < n; size = size * 2) {
    for (let low = 0; low < n - 1; low += 2 * size) {
      let mid = Math.min(low + size - 1, n - 1);
      let high = Math.min(low + 2 * size - 1, n - 1);

      if (mid < high) {
        mergeArr(arr, low, mid, high);
      }
    }
  }
}

function recMergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);

    recMergeSort(arr, low, mid);
    recMergeSort(arr, mid + 1, high);
    mergeArr(arr, low, mid, high);
  }
}

let arr = [3, 7, 12, 16, 20, 5, 9, 13, 15, 19, 1];

let low = 0;
let high = arr.length - 1;
let mid = Math.floor((low + high) / 2);

// console.log(mergeArr(arr, low, mid, high));
// iterativeMergeSort(arr);
recMergeSort(arr, low, high);

console.log(arr);

function matrixMul(arra, arrb) {
  let n = arra.length; // rows of A
  let m = arra[0].length; // columns of A
  let p = arrb[0].length; // columns of B

  // result matrix n x p
  let c = Array.from({ length: n }, () => Array(p).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < m; k++) {
        c[i][j] += arra[i][k] * arrb[k][j];
      }
    }
  }

  return c;
}

function matrixMul(arra, arrb) {
  let n = arra.length; // rows of A
  let m = arra[0].length; // cols of A
  let rb = arrb.length; // rows of B
  let p = arrb[0].length; // cols of B

  if (m !== rb) {
    throw new Error(
      "Matrix multiplication not possible: columns of A must equal rows of B"
    );
  }

  let c = Array.from({ length: n }, () => Array(p).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < m; k++) {
        c[i][j] += arra[i][k] * arrb[k][j];
      }
    }
  }

  return c;
}

// let A = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [5, 1, 2],
// ];

// let B = [
//   [7, 8],
//   [9, 10],
//   [11, 12],
// ];

// let B = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [2, 1, 9],
// ];

// console.log(matrixMul(A, B));

function addMatrix(A, B) {
  let n = A.length;
  let C = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }
  return C;
}

function subMatrix(A, B) {
  let n = A.length;
  let C = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      C[i][j] = A[i][j] - B[i][j];
    }
  }
  return C;
}
function splitMatrix(A) {
  let n = A.length;
  let mid = n / 2;

  let A11 = [],
    A12 = [],
    A21 = [],
    A22 = [];

  for (let i = 0; i < mid; i++) {
    A11.push(A[i].slice(0, mid));
    A12.push(A[i].slice(mid));
    A21.push(A[i + mid].slice(0, mid));
    A22.push(A[i + mid].slice(mid));
  }

  return [A11, A12, A21, A22];
}

function joinMatrix(C11, C12, C21, C22) {
  let n = C11.length * 2;
  let C = Array.from({ length: n }, () => Array(n).fill(0));
  let mid = n / 2;

  for (let i = 0; i < mid; i++) {
    for (let j = 0; j < mid; j++) {
      C[i][j] = C11[i][j];
      C[i][j + mid] = C12[i][j];
      C[i + mid][j] = C21[i][j];
      C[i + mid][j + mid] = C22[i][j];
    }
  }

  return C;
}
function strassenMatrixMul(A, B) {
  let n = A.length;

  // Base case: 1×1 matrix
  if (n === 1) {
    return [[A[0][0] * B[0][0]]];
  }

  // Split matrices
  let [A11, A12, A21, A22] = splitMatrix(A);
  let [B11, B12, B21, B22] = splitMatrix(B);

  // Strassen’s 7 multiplications
  let M1 = strassenMatrixMul(addMatrix(A11, A22), addMatrix(B11, B22));
  let M2 = strassenMatrixMul(addMatrix(A21, A22), B11);
  let M3 = strassenMatrixMul(A11, subMatrix(B12, B22));
  let M4 = strassenMatrixMul(A22, subMatrix(B21, B11));
  let M5 = strassenMatrixMul(addMatrix(A11, A12), B22);
  let M6 = strassenMatrixMul(subMatrix(A21, A11), addMatrix(B11, B12));
  let M7 = strassenMatrixMul(subMatrix(A12, A22), addMatrix(B21, B22));

  // Compute result submatrices
  let C11 = addMatrix(subMatrix(addMatrix(M1, M4), M5), M7);
  let C12 = addMatrix(M3, M5);
  let C21 = addMatrix(M2, M4);
  let C22 = addMatrix(subMatrix(addMatrix(M1, M3), M2), M6);

  // Combine into final matrix
  return joinMatrix(C11, C12, C21, C22);
}
let A = [
  [1, 2],
  [3, 4],
];

let B = [
  [5, 6],
  [7, 8],
];

console.log(strassenMatrixMul(A, B));
