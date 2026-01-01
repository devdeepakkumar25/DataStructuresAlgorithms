const fs = require("fs");
const path = require("path");

function genreateFileName(baseName, delayDays, extension) {
  const date = new Date();
  date.setDate(date.getDate() + delayDays);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${baseName}_${year}_${month}_${day}.${extension}`;
}

const fileName = genreateFileName("leetCode_podt", 0, "js");
console.log(fileName);

let content = "";
// fs.writeFile(fileName, content, (err) => {
//   if (err) {
//     console.error("Error creating file:", err);
//     return;
//   }
//   console.log(`File created successfully: ${fileName}`);
// });
// const filePath = path.join(__dirname, "December2025", fileName);
const filePath = path.join(__dirname, "Year2025", "December", fileName);

fs.writeFileSync(filePath, content);
