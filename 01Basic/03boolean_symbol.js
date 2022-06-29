// boolearn - true or false

let score = 100;

if (score === 100) {
  console.log("Great Score");
}

/**
 false value --
undefined
null
0
-0
NaN
""
 */

console.log(typeof false.toString());
// null: special object whose value is "no object"

console.log(typeof null); // object
console.log(typeof undefined); // not object its predefine global object

// undefined is a predefined globla constant
// null is a language keyword
// Both define absence of value

// symbol
String("Mang");
("Mang");

// return different value of symbol
let mySym = Symbol("p1");
let mySum2 = Symbol("p1");

// return same value of symbol
let priority = Symbol.for("p2");
let priority2 = Symbol.for("p2");

console.log(mySum2 === mySym);
console.log(priority === priority2);

const WIN = Symbol("WINDOW");
const AILE = Symbol("AILE");
const MID = Symbol("MID");

const crew = "WINDOW";

function getSeat(getValue) {
  switch (getValue) {
    case WIN:
      return "Seat is alloted";
    case AILE:
      return "Seat is alloted";
    case MID:
      return "Seat is alloted";
    default:
      console.log("No seat alloted");
  }
}

console.log(getSeat(crew));

// react
// card, card;

// Global Object
// constants like: undefined, NaN
// functions like : isNaN(), parseInt, eval()
// constructor like: Date(), String(), Object(), Math, JSON

/**
 * these are not reserved keywords, null is a reserved keywords
global object should be treated as reserved
 */

// ES2020 global this //global this ---
console.log(globalThis);

// Node Global and Browser Global
// node: global;
// browser: window;

console.log(this);

for (let i = 0; i <= 9; i++) {
  if (i === 3) {
    continue;
    console.log("continue");
  }
  console.log(i);
}
