// these are the rules of 'this' keyword in javascript
// implicit binding
// explicit binding
// new binding
// window binding

// implicit -> পরোক্ষভাবে

// ex-1

var sakib = {
    name: "Sakib",
    age: 35,
    printPLayerName: function () {
        console.log(this.name);
    },
};

console.log("example-1");
sakib.printPLayerName(); // এটা দেখবে 22 line e function name এর আগে কি আছে, একটা অব্জেক্ট আছে(sakib)। সেই অব্জেক্টে কি name আছে? হ্যা, তাহলে অই নামকেই 'this'  দিয়ে রেফার করবে।

// ex-2

console.log("example-2");

var printPLayerNameFunction = function (obj) {
    obj.printPLayerName = function () {
        console.log(this.name);
    };
};

var sakib = {
    name: "Sakib",
    age: 35,
};

var tamim = {
    name: "Tamim",
    age: 34,
};

printPLayerNameFunction(sakib);
printPLayerNameFunction(tamim);

sakib.printPLayerName();
tamim.printPLayerName();

// ex-3
console.log("example-3");
var Person = function (name, age) {
    return {
        name: name,
        age: age,
        printPLayerName: function () {
            console.log(this.name);
        },
        developer: {
            name: "Mr. Fahad Bin Munir",
            age: 22,
            printDevName: function () {
                console.log(this.name);
            },
        },
    };
};

var sakib = Person("Sakib", 35);

sakib.printPLayerName();
sakib.developer.printDevName();

// rule 2 -> explicit binding -> প্রত্যক্ষভাবে বা সরাসরি

console.log("explitic  binding");

console.log("ex-1");

const printDevName = function (virtue_1, virtue_2, virtue_3) {
    console.log(`${this.name} is ${virtue_1}  ${virtue_2}   ${virtue_3}`);
};

const developer = {
    name: "Joshua",
    age: 35,
    language: "JavaScript",
};

var virtue_1 = "Handsome";
var virtue_2 = "Good Logical Skill";
var virtue_3 = "Best";

//printDevName.call(developer, virtue_1, virtue_2, virtue_3);

// if we want to make an array of all of the virtues

var v = [virtue_1, virtue_2, virtue_3];

// to call explicitly with an array we have to use 'apply' method

printDevName.apply(developer, v);

// rule-3 new binding
console.log("new  binding");

console.log("ex-1");

function Fahad(name, age) {
    this.name = name;
    this.age = age;
    console.log(`${this.name}`);
}

const fahad = new Fahad("Fahad", 22);
