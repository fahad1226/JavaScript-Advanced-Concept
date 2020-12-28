// primitive data
// reference data -> direct memory te change kore dibe

var num1 = 10; // primitive data
var num2 = num1;

num1 = 20;

console.log(num1);
console.log(num2);

var players = ["sakib", "tamim", "mushfiq", "mahmudullah"]; // reference data

var fam = players;

fam[1] = "fahad";

console.log(players);

console.log(fam);

players = [];

console.log(players);

var language = {
    name: "JavaScript",
    estd: "1995",
};

var language2 = { ...language }; // this is immutably -> mane memory te change korbena
language2.name = "C++";

console.log(language);
console.log(language2);

const myName = "Fahad";
const myName2 = new String("Fahad"); // this is called wrapper type, should avoid this kinda things

console.log(myName);

console.log(myName2.charAt(0));

console.log(myName.charAt(2));

var className = "first";

var className2 = "second";
console.log(className);
console.log(className2);
