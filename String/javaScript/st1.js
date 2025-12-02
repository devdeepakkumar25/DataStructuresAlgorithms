const airline = "Tap Air Protugal";

const plane1 = "A320";

console.log(plane1[0]);

console.log("first"[0]);

console.log(airline.length);

console.log(airline.indexOf("r"));

console.log(airline.indexOf("r"));

console.log(airline.lastIndexOf("r"));

console.log(airline.indexOf("Protugal"));

console.log(airline.indexOf("protugal"));

console.log(airline.slice(4));
console.log(airline.slice(0, 4));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));

console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));

console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};

checkMiddleSeat("11b");

checkMiddleSeat("23c");

checkMiddleSeat("3E");

console.log(airline.slice(1, -2));

console.log(new String("jonas"));

console.log(typeof new String("jonas"));

console.log(typeof new String("Jonas").slice(2));

console.log(airline);

console.log(airline.toLowerCase());

console.log(airline.toUpperCase());

const passenger = "DeEpAk";

const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

const email = "hello@gmail.com";

const loginEmail = "   Hello@Gmail.com \n";

const lowerEmail = loginEmail.toLowerCase();

const normalizeEmail = lowerEmail.trim();
console.log(loginEmail);
console.log(lowerEmail);

console.log(normalizeEmail);

console.log(email === normalizeEmail);

const priceGB = "288,97Rs";
const priceUs = priceGB.replace("Rs", "$").replace(",", ".");

console.log(priceUs);

const announcement = "All passengers com to boarding door 23";

console.log(announcement.replace("door", "gate"));

console.log(announcement.replaceAll("door", "get"));

console.log(announcement.replace(/door/g, "gate"));

const plane = "Airbus A320neo";

console.log(plane.includes("A32"));

console.log(plane.includes("Boeing"));

console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo"))
  console.log("Part of the new Airbus family");

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("You are not allowed to board");
  else console.log("Welcome board");
};

checkBaggage("I have a laptop ,some food");

checkBaggage("Socks and camera and gun");

console.log("a+very+string".split("+"));

const [firstName, lastName] = "Deepak Dev".split(" ");

console.log(firstName);

const name = ["Mr", firstName, lastName].join(" ");

console.log(name);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper);
  console.log(namesUpper.join(" "));
};

capitalizeName("deepak dev");

// Padding

const message = "Go to gate 23";

console.log(message.padStart(25, "+"));
console.log("first".padStart(25, "+").padEnd(30, "+"));

console.log("++++++++++++++++++++first+++++".length);

const maskCreditCard = function (number) {
  const str = number + " ";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(4567890978675678));
console.log(maskCreditCard("34567890"));

console.log("first".repeat(3));
