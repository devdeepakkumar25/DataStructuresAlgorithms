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
