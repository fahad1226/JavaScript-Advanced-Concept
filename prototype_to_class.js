class Person {
    constructor(name, age) {
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
    code() {
        console.log(`${this.name} is coding`);
    }
}

class Fahad extends Person {
    // sub class
    constructor(name, age, passion, skill) {
        super(name, age);
        this.passion = passion;
        this.skill = skill;
    }

    game() {
        console.log("person is playing" + this.skill);
    }
}

const person = new Person("Tamim", 22);
const fahad = new Fahad("Programming", "JavaScript");
fahad.play();
person.eat();
