// Number of times graph cuts X-axis
// Difficulty: EasyAccuracy: 49.8%Submissions: 2K+Points: 2
// Given an integer array arr[], where each arr[i] denotes the trajectory of the graph over the plane;
//  i.e. arr[i]>0 means graph going above its current position by arr[i] value and arr[i]<0 means graph going down by arr[i] value.
// If initial position of the graph is at origin, determines the number of times graph crosses or touches the X-axis.

// Example:

// Input: arr[] = [2, 5, -9, 4]
// Output: 2
// Explanation: Graph touches the X-axis two times through index 1 to 2, and through index 2 to 3.
// Input: arr[] = [4, -6, 2, 8, -2, 3, -12]
// Output: 3
// Explanation:

// User function Template for javascript
class Solution {
  touchedXaxis(arr) {
    // code here
    let curPos = 0;
    let times = 0;

    for (let i = 0; i < arr.length; i++) {
      if (curPos < 0 && curPos + arr[i] >= 0) {
        times++;
      } else if (curPos > 0 && curPos + arr[i] <= 0) {
        times++;
      }
      curPos += arr[i];
    }
    return times;
  }
}
