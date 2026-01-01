// 840. Magic Squares In Grid

function isMagicGrid(grid, r, c) {
  const set = new Set();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const num = grid[r + i][c + j];

      if (num < 1 || num > 9 || set.has(num)) {
        return false;
      }
      set.add(num);
    }
  }

  const sum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];

  for (let i = 0; i < 3; i++) {
    if (grid[r + i][c] + grid[r + i][c + 1] + grid[r + i][c + 2] !== sum) {
      return false;
    }

    if (grid[r][c + i] + grid[r + 1][c + i] + grid[r + 2][c + i] !== sum) {
      return false;
    }
  }

  if (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== sum) {
    return false;
  }

  if (grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] !== sum) {
    return false;
  }
  return true;
}

var numMagicSquaresInside = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let count = 0;

  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= cols - 3; j++) {
      if (isMagicGrid(grid, i, j)) {
        count++;
      }
    }
  }
  return count;
};

grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2],
];

console.log(numMagicSquaresInside(grid));
