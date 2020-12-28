// // this is a synchronus function
// function synchronusFunc() {
//     return `Hello There`;
// }
// console.log(synchronusFunc());
// console.log("line after synchronus function");

// // lets make a asynchronus function

// async function asynchronusFunc() {
//     return "Hello There";
// }

// console.log(asynchronusFunc());

function process(number) {
    console.log(number);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((index) => {
    process(index);
});

console.log("last line");
