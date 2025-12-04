/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  let n = directions.length;

  let i = 0;

  while (i < n && directions[i] == "L") {
    i++;
  }

  let j = n - 1;

  while (j >= 0 && directions[j] == "R") {
    j--;
  }

  let collisions = 0;

  while (i <= j) {
    if (directions[i] != "S") {
      collisions++;
    }
    i++;
  }

  return collisions;
};
