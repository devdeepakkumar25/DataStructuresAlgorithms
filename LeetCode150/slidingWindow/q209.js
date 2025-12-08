var minSubArrayLen = function (target, nums) {
  let n = nums.length;

  let i = 0;

  let j = 0;

  let minL = n;

  let sum = 0;

  while (j < n) {
    sum += nums[j];

    while (sum >= target) {
      minL = Math.min(minL, j - i + 1);

      sum -= nums[i];
      i++;
    }

    j++;
  }
  return minL;
};

nums = [2, 3, 1, 2, 4, 3];
arget = 7;

console.log(minSubArrayLen(target, nums));
