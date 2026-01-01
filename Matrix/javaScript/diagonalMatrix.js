class DiagonalMatrix {
  constructor(n) {
    this.n = n;
    this.matrix = new Array(n).fill(0);
  }

  // Set value at position (i, j)
  set(i, j, value) {
    if (i === j && i >= 1 && i <= this.n) {
      this.matrix[i - 1] = value;
    }
  }

  // Get value from position (i, j)
  get(i, j) {
    if (i === j && i >= 1 && i <= this.n) {
      return this.matrix[i - 1];
    }
    return 0;
  }

  // Display the full diagonal matrix
  display() {
    for (let i = 1; i <= this.n; i++) {
      let row = "";
      for (let j = 1; j <= this.n; j++) {
        row += (i === j ? this.matrix[i - 1] : 0) + " ";
      }
      console.log(row.trim());
    }
  }
}

const dm = new DiagonalMatrix(4);

dm.set(1, 1, 5);
dm.set(2, 2, 8);
dm.set(3, 3, 9);
dm.set(4, 4, 12);

dm.display();

console.log("Stored Array:", dm.matrix);
