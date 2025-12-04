// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

let arr = [12, 35, 1, 10, 34, 1];

arr = [10, 10, 10];

let getSecondLargest = (arr) => {
  let first = -1;
  let second = -1;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value > first) {
      second = first;
      first = value;
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  if (first !== second) return second;
  return -1;
};

console.log(getSecondLargest(arr));
