let dollar = "$";
let love = "❤";

console.log(dollar.length);
console.log(love.length);

// escape sequence
//\n \u, \'

let myString = "Hello, me";

console.log(myString.substring(1, 4));
console.log(myString.slice(1, 4));
console.log(myString.slice(-2));

console.log(myString.indexOf("e"));
console.log(myString.indexOf("e", 3));
console.log(myString.lastIndexOf("e"));

myString.startsWith("+91");
myString.endsWith("@gmail.com");
myString.includes("test");
myString.toLowerCase();
myString.toUpperCase();

myString.normalize(); // nfd and nfc

console.log("HDFC334433".padStart(12, "0"));

"*".repeat(15); // return new string

let score = 100;
let greeting = `\
 ${dollar} is at 
 value of ${score}
 \u2718
`;

// console.log(greeting);

let myNewString = String.raw`\u2718`.length;

console.log(myNewString);

let u2718 = "string";
console.log(u2718);
