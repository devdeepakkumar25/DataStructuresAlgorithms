/**
 * @param {number[]} val
 * @param {number[]} wt
 * @param {number} capacity
 * @returns {number}
 */
class Solution {
  fractionalKnapsack(val, wt, capacity) {
    let n = val.length;

    // Create (value, weight) pairs
    let items = [];
    for (let i = 0; i < n; i++) {
      items.push([val[i], wt[i]]);
    }

    // Sort by value/weight ratio (descending)
    items.sort((a, b) => b[0] / b[1] - a[0] / a[1]);

    let res = 0.0;
    let remainingCapacity = capacity;

    for (let i = 0; i < n; i++) {
      let value = items[i][0];
      let weight = items[i][1];

      if (remainingCapacity === 0) break;

      if (weight <= remainingCapacity) {
        res += value;
       res += value;
        remainingCapacity -= weight;
      } else {
        res += (value / weight) * remainingCapacity;
        break;
      }
    }

    return res;
  }
}

let val = [60, 100, 120];
let wt = [10, 20, 30];
let capacity = 50;

let sol = new Solution();
console.log(sol.fractionalKnapsack(val, wt, capacity));
