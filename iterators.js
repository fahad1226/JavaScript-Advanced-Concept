const fruits = ["apple", "orange", "lemon", "mango"];

const object = {
    car: "Mercedes-Benz",
    food: "Pasta",
    hobby: "Programming",
    language: "JavaScript",
};

let entries = Object.entries(object);
//console.log(entries.length);

// for (var i = 0; i < entries.length; i++) { // this is not the right way to iterate an object
//     console.log(entries[i][1]);
// }

// for (let element of entries) {
//     // we could use this instead of vanilla for loop.
//     console.log(element[1]);
// }

// const name = "JavaScript"; // name is iterable
// for (let element of name) {
//     console.log(element);
// }

// for (let element of object) { object is not iterable
//     console.log(element);
// }

// for (let element of fruits) {
//     console.log(element);
// }

console.log(fruits[fruits.length - 1]);
console.dir(fruits);
const iterator = fruits[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());