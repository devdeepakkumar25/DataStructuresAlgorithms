class LowerTriangularMatrix {
  constructor(n) {
    this.n = n;
    this.size = Math.floor((n * (n + 1)) / 2);
    this.matrix = new Array(this.size).fill(0);
  }

  /* ================= ROW MAJOR ================= */

  setRowMajor(i, j, value) {
    if (i >= j && i >= 1 && j >= 1 && i <= this.n && j <= this.n) {
      const index = (i * (i - 1)) / 2 + (j - 1);
      this.matrix[index] = value;
    }
  }

  getRowMajor(i, j) {
    if (i >= j && i >= 1 && j >= 1 && i <= this.n && j <= this.n) {
      const index = (i * (i - 1)) / 2 + (j - 1);
      return this.matrix[index];
    }
    return 0;
  }

  displayRowMajor() {
    for (let i = 1; i <= this.n; i++) {
      let row = "";
      for (let j = 1; j <= this.n; j++) {
        row += (i >= j ? this.getRowMajor(i, j) : 0) + " ";
      }
      console.log(row.trim());
    }
  }

  /* ================= COLUMN MAJOR ================= */

  setColumnMajor(i, j, value) {
    if (i >= j && i >= 1 && j >= 1 && i <= this.n && j <= this.n) {
      const index = this.n * (j - 1) - ((j - 1) * (j - 2)) / 2 + (i - j);
      this.matrix[index] = value;
    }
  }

  getColumnMajor(i, j) {
    if (i >= j && i >= 1 && j >= 1 && i <= this.n && j <= this.n) {
      const index = this.n * (j - 1) - ((j - 1) * (j - 2)) / 2 + (i - j);
      return this.matrix[index];
    }
    return 0;
  }

  displayColumnMajor() {
    for (let i = 1; i <= this.n; i++) {
      let row = "";
      for (let j = 1; j <= this.n; j++) {
        row += (i >= j ? this.getColumnMajor(i, j) : 0) + " ";
      }
      console.log(row.trim());
    }
  }
}

const rm = new LowerTriangularMatrix(4);

rm.setRowMajor(1, 1, 1);
rm.setRowMajor(2, 1, 2);
rm.setRowMajor(2, 2, 3);
rm.setRowMajor(3, 1, 4);
rm.setRowMajor(3, 2, 5);
rm.setRowMajor(3, 3, 6);

rm.displayRowMajor();
console.log("Stored Array:", rm.matrix);

const cm = new LowerTriangularMatrix(4);

cm.setColumnMajor(1, 1, 1);
cm.setColumnMajor(2, 1, 2);
cm.setColumnMajor(2, 2, 3);
cm.setColumnMajor(3, 1, 4);
cm.setColumnMajor(3, 2, 5);
cm.setColumnMajor(3, 3, 6);

cm.displayColumnMajor();
console.log("Stored Array:", cm.matrix);
