// Best O(1),Worst O(n^2) ,comparision o(n)

function bubbleSort(arr) {
  let isSorted = false;
  for (let i = 0; i < arr.length; i++) {
    isSorted = true;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        isSorted = false;
      }
    }
    if (isSorted) return;
  }
}

let arr = [7, 8, 9, 10, 23, 1, 4, 5];

// bubbleSort(arr);

// Best ,worst -o(n^2) comparisons o(n) , Passes -o(n)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++)
      if (arr[j] < arr[minIndex]) minIndex = j;

    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
}

function getMinIndex(arr, index) {
  let minIndex = index;
  for (let j = index + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) minIndex = j;
  }
  return minIndex;
}

function selectionSort2(arr) {
  for (let index = 0; index < arr.length; index++) {
    let minIndex = getMinIndex(arr, index);
    [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
  }
}
// selectionSort2(arr);

// best o(n) worst o(n) worst o(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

// insertionSort(arr);

function mergeSort(arr) {
  if (arr.length <= 1) return;
  let middle = Math.floor(arr.length / 2);

  let left = new Array(middle);

  for (let i = 0; i < middle; i++) {
    left[i] = arr[i];
  }

  let right = new Array(arr.length - middle);

  for (let i = middle; i < arr.length; i++) {
    right[i - middle] = arr[i];
  }
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
}

function merge(left, right, result) {
  let i = 0;
  let j = 0;
  let n = left.length;
  let m = right.length;
  let k = 0;

  while (i < n && j < m) {
    if (left[i] <= right[j]) {
      result[k++] = left[i++];
    } else {
      result[k++] = right[j++];
    }
  }

  while (i < n) {
    result[k++] = left[i++];
  }
  while (j < m) {
    result[k++] = right[j++];
  }
}

// mergeSort(arr);

// best O(nlogn) worst o(n^2)
// space o(logn) space o(n)
function quickSort(arr) {
  function sort(arr, start, end) {
    if (start >= end) return;
    let boundary = partition(arr, start, end);
    sort(arr, start, boundary - 1);
    sort(arr, boundary + 1, end);
  }
  sort(arr, 0, arr.length - 1);
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let boundary = start - 1;

  for (var i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      boundary++;
      [arr[i], arr[boundary]] = [arr[boundary], arr[i]];
    }
  }
  [arr[boundary + 1], arr[end]] = [arr[end], arr[boundary + 1]];
  return boundary + 1;
}

quickSort(arr);
console.log(arr);
