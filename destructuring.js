const user = {
    name: "Sakib",
    age: 35,
    passion: "Cricket",
    fav_movies: ["Cast Away", "3 idiots", "Green Mile", "Shutter Island"],
    test: {
        profession: "Cricker Player",
        job: "Playing",
    },
};

/* 
all these are old ways of picking object

const name = user["name"];
const movies = user.fav_movies;
const profession = user.test.profession;
console.log(name);
console.log(movies);
console.log(profession);
*/

// using object destructiring

const { name: title } = user; // title variable e name ta assign korlam
const {
    test: { profession },
} = user;
console.log(title);
console.log(profession);

const hello = ({ name, age, phone }) => {
    return name + " " + age + " " + phone;
};

const info = { name: "Fahaad", age: 22, phone: "654964156415" };
console.log(hello(info));
