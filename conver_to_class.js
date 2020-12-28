class Person {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

const sakib = {
    name: "Sakib",
    age: 35,
    position: "captain",
    salary: "2laks",
};

const player_1 = new Person(sakib); // here player_1 is child and Player is parent
player_1.eat();

console.dir(Person);
console.log(Person.prototype);


// another real life example of prototype using class based syntax

let numbers = new Array(); // অব্জেক্ট চাইল্ডটা(numbers) প্যারেন্টের(Array) প্রটোটাইপে যেসব মেথডস আছে সব একসেস করতে পারবে।

numbers.push(10,20,30)
console.log(numbers);

console.dir(Array);