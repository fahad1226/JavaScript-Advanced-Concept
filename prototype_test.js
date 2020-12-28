function Person(name, age) {
    let person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;
    /*person.eat = personMethods.eat;
    person.play = personMethods.play;
    person.sleep = personMethods.sleep; */
    return person;
}

Person.prototype = {
    eat() {
        console.log(`${this.name} is eating`);
    },

    play() {
        console.log(`${this.name} is playing`);
    },
    sleep() {
        console.log(`${this.name} is sleeping`);
    },
    gaming() {
        console.log(`${this.name} is gaming`);
    },
};

const fahad = Person("Fahad", 22);
fahad.eat();
const tamim = Person("Tamim", 35);
tamim.eat();
tamim.gaming();

/* const parent = {
    name: "Mashrafi",
    age: 40,
    position: "fast bowling",
};

const child = Object.create(parent);
console.log(child);
 */

// function prototypeOne() {}
// console.dir(prototypeOne);
