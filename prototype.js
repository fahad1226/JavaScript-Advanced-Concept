

// prototye হলো জাভাস্ক্রিপ্ট এর যেকোনো ফাংশান এর একটা প্রপার্টি, যেটা একটা অব্জেক্টকে পয়েন্ট করে। অন্য কথায় এটা ইনহেরিট করে।
const f = function () { }

console.dir(f.prototype)


function Person(name, age) {
    let person = Object.create(Person.prototype) // এই person child অব্জেক্ট টা Person parent অব্জেক্ট থেকে সব মেথডস ইনহেরিট করে নিয়েছে।
    person.name = name;
    person.age = age;
    return person;
}

Person.prototype = {
    eat() {
        console.log(`${this.name} person is eating`);
    },
    sleep() {
        console.log('person is sleeping');
    },
    play() {
        console.log('person is playing');
    },
    code() {
        console.log('person is coding');
    }
}

const fahad = Person('Fahad Bin Munir', 22)
fahad.eat();



let persons = new Array()

persons.push('Tamim')

console.dir(Array.prototype);
