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

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let falg = true;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        falg = false;
      }
    }
    if (falg) return;
  }
}

// let arr = [8, 10, 9, 12, 5, 7];

// bubbleSort(arr);

console.log(arr);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

// selectionSort(arr);
// console.log(arr);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
}

// insertionSort(arr);

// console.log(arr);

function sort(arr) {
  if (arr.length <= 1) return;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  sort(left);
  sort(right);
  merge(left, right, arr);
}

function mergeSort(arr) {
  if (arr.length <= 1) return;

  let mid = Math.floor(arr.length / 2);

  let left = new Array(mid);

  for (let i = 0; i < mid; i++) {
    left[i] = arr[i];
  }

  let right = new Array(arr.length - mid);

  for (let j = mid; j < arr.length; j++) {
    right[j - mid] = arr[j];
  }

  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
  // return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let n = left.length;
  let m = right.length;
  let k = 0;

  while (i < n && j < m) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      k++;
      j++;
    }
  }

  for (let idx = i; idx < n; idx++) {
    arr[k++] = left[idx];
  }
  for (let idx = j; idx < m; idx++) {
    arr[k++] = right[idx];
  }
  // return arr;
}

// console.log(merge([1, 2, 4], [3, 5, 6, 8], [0, 0, 0, 0, 0, 0]));

// mergeSort(arr);
// sort(arr);

// console.log(arr);

function quickSort(arr, low, high) {
  if (low >= high) return;

  let partioinIndex = partition(arr, low, high);
  quickSort(arr, low, partioinIndex - 1);
  quickSort(arr, partioinIndex + 1, high);
}

function partition(arr, low, high) {
  let pivot = arr[low];

  let i = low;
  let j = high;

  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);
    do {
      j--;
    } while (arr[j] > pivot);

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];

  return j;
}

// console.log(quickSort(arr, 0, arr.length));
// console.log(arr);

function partioinFun(arr, start, end) {
  let pivot = arr[end];

  let boundary = start - 1;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      boundary++;
      [arr[i], arr[boundary]] = [arr[boundary], arr[i]];
    }
  }
  return boundary;
}

function quickSortFun(arr, start, end) {
  if (start >= end) return;
  let boundary = partioinFun(arr, start, end);
  sort(arr, start, boundary - 1);
  sort(arr, boundary + 1, end);
}

// quickSortFun(arr, 0, arr.length - 1);

// console.log(arr);

function countSort(arr) {
  let max = Math.max(...arr);

  let count = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  let k = 0;

  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      for (let m = 0; m < count[i]; m++) {
        arr[k++] = i;
      }
    }
  }
}

// countSort(arr);
// console.log(arr);

let radixSort = (arr) => {
  let max = Math.max(...arr);

  let maxDigit = max.toString().length;

  let bins = Array.from({ length: 10 }, () => []);

  let place = 1;

  for (let d = 0; d < maxDigit; d++) {
    for (let i = 0; i < 10; i++) {
      bins[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
      let digit = Math.floor(arr[i] / place) % 10;
      bins[digit].push(arr[i]);
    }

    let k = 0;

    for (let i = 0; i < 10; i++) {
      for (let num of bins[i]) {
        arr[k++] = num;
      }
    }
    place *= 10;
  }
  return arr;
};

radixSort(arr);
console.log(arr);
