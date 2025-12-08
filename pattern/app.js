let prompt = require("prompt-sync");

prompt = prompt();
// let rows = Number(prompt("Enter the number of Row: "));
// let cols = Number(prompt("Enter the number of Cols: "));

function solidRectangle(rows, cols) {
  for (let i = 0; i < rows; i++) {
    // console.log("*".repeat(cols));
    let rowStar = "*";
    for (let j = 0; j < cols; j++) {
      rowStar += "*";
    }
    console.log(rowStar);
  }
}

// solidRectangle(rows, cols);

function hollowRectangle(r, c) {
  for (let i = 0; i < r; i++) {
    if (i === 0 || i === r - 1) console.log("*".repeat(c));
    else console.log("*" + " ".repeat(c - 2) + "*");
  }
}

// hollowRectangle(3, 5);

let leftTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
};

// leftTriangle(4);

let rightTriangle = (n) => {
  for (let i = 1; i < n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
};

// rightTriangle(5);

let invertedTrianlge = (n) => {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
  }
};

// invertedTrianlge(5);

let pyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
};

// pyramid(5);

