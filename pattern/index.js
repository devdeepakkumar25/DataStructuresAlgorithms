const prompt = require("prompt-sync")();

process.stdout.write("Hello\n");

let n = Number(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}
