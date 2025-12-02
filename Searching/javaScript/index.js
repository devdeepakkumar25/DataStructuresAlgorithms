function linearSearch(arr, target) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) return index;
  }

  return -1;
}

// const arr = [7, 1, 3, 6, 5];
// console.log(linearSearch(arr, 5));

function binarySearchItr(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const arr = Array.from({ length: 100 }).map((_, index) => index + 1);
console.log(arr);

// console.log(binarySearchItr(arr, 50));
// console.log(binarySearchItr(arr, 0));
// console.log(binarySearchItr(arr, 1));

function recBinarySearch(arr, target) {
  function helper(arr, target, left, right) {
    if (left > right) {
      return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      return helper(arr, target, left, mid - 1);
    } else {
      return helper(arr, target, mid + 1, right);
    }
  }
  return helper(arr, target, 0, arr.length - 1);
}

// console.log(recBinarySearch(arr, -100));

function ternarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  function helper(arr, target, left, right) {
    if (left > right) return -1;
    let partitionSize = Math.floor((right - left) / 3);

    let mid1 = left + partitionSize;
    let mid2 = right - partitionSize;

    if (arr[mid1] == target) {
      return mid1;
    }

    if (arr[mid2] == target) {
      return mid2;
    }

    if (target < arr[mid1]) {
      return helper(arr, target, left, mid1 - 1);
    } else if (target > arr[mid1] && target < arr[mid2]) {
      return helper(arr, target, mid1 + 1, mid2 - 1);
    } else {
      return helper(arr, target, mid1 + 1, right);
    }
  }
  return helper(arr, target, left, right);
}

// console.log(ternarySearch(arr, 100));

function jumpSearch(arr, target) {
  let blockSize = Math.floor(Math.sqrt(arr.length));
  let start = 0;
  let next = blockSize;
  while (start < arr.length && arr[next - 1] < target) {
    start = next;
    next += blockSize;

    if (next > arr.length) {
      next = arr.length;
    }
  }

  for (let i = start; i < next; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log(jumpSearch(arr, 19));

function exponentialSearch(arr, target) {
  let bound = 1;
  while (bound < arr.length && arr[bound] < target) bound *= 2;

  let left = Math.floor(bound / 2);
  let right = Math.min(bound, arr.length - 1);

  function helper(arr, target, left, right) {
    if (left > right) {
      return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      return helper(arr, target, left, mid - 1);
    } else {
      return helper(arr, target, mid + 1, right);
    }
  }
  return helper(arr, target, left, right);
}

console.log(exponentialSearch(arr, 20));
