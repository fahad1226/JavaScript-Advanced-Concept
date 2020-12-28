const { deepStrictEqual } = require("assert");
const fs = require("fs");

const EventEmitter = require("events");

//fs.writeFileSync("myfile.txt", "Hello everyone, how are you?");

//const data = fs.readFileSync("myfile.txt");

fs.readFile("myfile.txt", (err, data) => {
    // eta asynchronus
    // এটা করে আমি মেইন থ্রেডকে ব্লক করে রাখছিনা। মেইন থ্রেড এটা 'সহকারি থ্রেড' কে দিয়ে নিচের কাজে চলে যায়।'
    console.log(data.toString());
});

//console.log(data.toString());
console.log("Hello");

const emitter = new EventEmitter();

// event register kora.
emitter.on("bellRings", ({ period, text }) => {
    console.log(`Chutii, we need to goto home becaure ${period} and ${text}`);
});

// event raise kora.
emitter.emit("bellRings", {
    period: "First",
    text: "first period ended!",
});
