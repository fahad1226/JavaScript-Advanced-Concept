const javascript = {
    // example with 'this' problem
    name: "JavaScript",
    libraries: ["React", "Vue", "jQuery"],
    printLibraries: function () {
        var self = this; // eta ekta simple hack to solve that 'this' problem but its not convenient
        //console.log(this);
        this.libraries.forEach(function (item) {
            // forEach function ta amar outer 'this' ke change kore felche, jehetu ami normal function use kortechi.
            console.log(`${self.name} has ${item} as libraries`);
        });
    },
};

//javascript.printLibraries();

// we can solve this problem by using fat arrow function

const javascriptWithThis = {
    name: "JavaScript",
    libraries: ["React", "Vue", "jQuery"],
    printLibraries: function () {
        this.libraries.forEach((item) => // now arrow function solved that silly this problem, which is soo awesome..
            console.log(`${this.name} has ${item} as libraries`)
        );
    },
};

javascriptWithThis.printLibraries();
