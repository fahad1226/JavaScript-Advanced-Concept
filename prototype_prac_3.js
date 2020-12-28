// function Player({ name, age, position, salary }) {
//     let player = Object.create(Player.prototype);
//     player.name = name;
//     player.age = age;
//     player.position = position;
//     player.salary = salary;

//     return player;
// }

function Player({ name, age, position, salary }) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
}

Player.prototype = {
    eat() {
        console.log(`${this.name} is eating`);
    },
    sleep() {
        console.log(`${this.name} is eating`);
    },
    practice() {
        console.log(`${this.name} is eating`);
    },
    play() {
        console.log(`${this.name} is eating`);
    },
};

const sakib = {
    name: "Sakib",
    age: 35,
    position: "captain",
    salary: "2laks",
};
// const player1 = Player(sakib);
// player1.eat();

const tamim = {
    name: "Tamim",
    age: 35,
    position: "vice-captain",
    salary: "2laks",
};
// const player2 = Player(tamim);
// player2.play();

const player1 = new Player(sakib); //new keyword likhar subidha hocche amake duita line kom likhte hobe ()
const player2 = new Player(tamim);
player1.eat();
player2.play();
