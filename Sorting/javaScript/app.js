let bubbleSort = (arr) => {
  let falg = false;
  for (let i = 0; i < arr.length; i++) {
    falg = true;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        falg = false;
      }
    }
    if (falg) break;
  }
};

let arr = [8, 5, 7, 3, 2];

// bubbleSort(arr);

// console.log(arr);

let insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let minIndex = i;
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
};

// insertionSort(arr);

// console.log(arr);

let selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let k = i;

    while (j < arr.length) {
      if (arr[j] < arr[k]) {
        k = j;
      }
      j++;
    }

    [arr[i], arr[k]] = [arr[k], arr[i]];
  }
};

// selectionSort(arr);

// console.log(arr);

let nums = [50, 70, 60, 40, 80, 10, 20, 30];

let partioinIndex = (arr, l, h) => {
  let mid = Math.floor((l + h) / 2);
  // let pivot = arr[l];
  // let pivot = arr[mid];
  [arr[l], arr[mid]] = [arr[mid], arr[l]]; // <-- move pivot to left
  let pivot = arr[l];
  let i = l;
  let j = h;

  do {
    do {
      i++;
    } while (arr[i] <= pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  } while (i < j);

  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
};

let quickSort = (arr, low, high) => {
  if (low < high) {
    let pIndex = partioinIndex(arr, low, high);
    quickSort(arr, low, pIndex);
    quickSort(arr, pIndex + 1, high);
  }
};

// quickSort(nums, 0, nums.length);

// console.log(nums);

let ar = [6, 3, 9, 10, 15, 6, 8, 12, 3, 6];

let countSort = (arr) => {
  let max = Math.max(...arr);
  console.log(max);

  let count = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  let k = 0;

  for (let j = 0; j < count.length; j++) {
    if (count[j] > 0) {
      for (let m = 0; m < count[j]; m++) {
        arr[k++] = j;
      }
    }
  }
};

// countSort(ar);

// console.log(ar);

let arr2 = [237, 146, 259, 348, 152, 163, 235, 48, 36, 62];

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

radixSort(arr2);

console.log(arr2); 
