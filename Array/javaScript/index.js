function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

function recLinearSearch(arr, key) {
  function helper(arr, index, key) {
    if (index >= arr.length) return -1;
    if (arr[index] === key) return index;
    return helper(arr, index + 1, key);
  }
  return helper(arr, 0, key);
}
// const arr = new Array(10).fill(0).map((value, index) => value + index + 1);
const arr = Array.from({ length: 10 }, (_, i) => i + 1);
// console.log(linearSearch(arr, 7));
console.log(arr);

console.log(recLinearSearch(arr, 2));

console.log(1 < 2 < 3);

console.log(3 > 2 > 1);

console.log(3 > 2 > 0);

function binarySearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (key < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 10));

function recBinarySearch(arr, key) {
  function helper(arr, left, right, key) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (key < arr[mid]) {
      return helper(arr, left, mid - 1, key);
    }
    return helper(arr, mid + 1, right, key);
  }
  return helper(arr, 0, arr.length - 1, key);
}

console.log(recBinarySearch(arr, 10));
