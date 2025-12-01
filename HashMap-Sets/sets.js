const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);

console.log(orderSet);

console.log(new Set("Deepak"));

console.log(orderSet.size);

console.log(orderSet);

console.log(orderSet.has("Pizza"));
console.log(orderSet.add("Garlic Bread"));

console.log(orderSet.delete("risotto"));

// orderSet.clear();

console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];

const staffUnique = new Set(staff);

console.log(staffUnique);

const staffArr = [...new Set(staff)];

console.log(staffArr);

console.log(staffUnique.size);

console.log(staffArr.length);

console.log(new Set("jonaschmedtmann").size);

const set = new Set([1, 2, 3]);

console.log(set);

set.add(10);

set.delete(10);
// set.clear()
console.log(set.size);

console.log(set);

console.log([...set.keys()]);

console.log([...new Set([1, 2, 3, "a", "b"])]);

console.log([...set.values()]);

console.log([...set.entries()]);

set.forEach((value) => {
  console.log(value);
});

for (const key of set.keys()) console.log(key);

for (const [key, value] of set.entries()) console.log(key, value);

const a = new Set([1, 2]);
const b = new Set([2, 3]);

console.log(a.union(b));

console.log(a.intersection(b));

console.log(a.difference(b));

console.log(a.symmetricDifference(b));

console.log(new Set([1, 2, 3]).isSubsetOf(new Set([1, 2, 3])));

console.log(new Set([1, 2, 3]).isSupersetOf(new Set([1, 2])));

console.log(new Set([, 2]).isDisjointFrom(new Set([3, 4])));
