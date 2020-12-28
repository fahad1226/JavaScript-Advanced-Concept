const symbol1 = Symbol();
const symbol2 = Symbol();
//console.log(symbol1 === symbol2); // this would be false

var obj = {};

obj.name = "JavaScript";
obj.estd = 1995;
obj[Symbol("founder")] = "Brendon Eich"; // আমরা চাই আমাদের অবজেক্ট এর এই প্রপার্টি টা হাইড থাকুক, সেজন্য আমি Symbol ইউজ করলাম.

// for (let key in obj) {
//     console.log(key);
// }

console.log(Object.keys(obj));
