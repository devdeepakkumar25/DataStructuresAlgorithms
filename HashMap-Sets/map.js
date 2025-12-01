const rest = new Map();

rest.set("name", "Classico Italiano");

rest.set(1, "Firenze Italy");

console.log(rest.set(2, "Lisbon, Portugal"));

rest.set("categories", ["Italiz", "Pizzeria", "Vegetarian", "Organic"]);

rest
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "We are close");
console.log(rest);

console.log(rest.get("name"));

const time = 8;

console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));

console.log(rest.delete(2));

console.log(rest.size);

// rest.clear();
rest.set([1, 2], "test");
console.log(rest);
const arr = [3, 4];

rest.set(arr, "New Array");

console.log(rest.get([1, 2]));

console.log(rest.get(arr));

// rest.set(document.querySelector("h1"), "Heading");

const question = new Map([
  ["question", "What is the best programming language"],
  [1, "C"],
  [2, "Java"],
  [3, "Java Script"],
  ["Correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question);

const openingHourrs = {
  Thu: {
    Opening: 9,
    Closing: 4,
  },
  Fri: {
    Opening: 9,
    Closing: 4,
  },
};

console.log(Object.entries(openingHourrs));

const hoursMap = new Map(Object.entries(openingHourrs));

console.log(hoursMap);

for (const [key, value] of question) {
  //   console.log([key, value]);
  if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}

// const answer = Number(prompt("Your answer"));

// console.log(answer);
// console.log(question.get(question.get("Correct") === answer));

console.log(question.get(question.get("Correct") === 3));

console.log([...question]);

console.log(question.entries());

console.log(question.keys());

console.log(question.values());

const map1 = new Map();

map1.set("name", "deepak");

console.log(map1);

const map2 = new Map([
  ["name", "john"],
  ["age", 25],
]);

console.log(map2);

const map3 = new Map();

map3.set("id", 101);
map3.set("name", "alice");
map3.set("id", 102);

console.log(map3);

console.log(map3.get("name"));

console.log(map3.has("name"));

console.log(map3.delete("id"));

console.log(map1.clear());

console.log(map3.size);

console.log([...map3.keys()]);

console.log([...map3.values()]);

console.log([...map3.entries()]);

map3.forEach((value, key) => {
  console.log(key, value);
});
