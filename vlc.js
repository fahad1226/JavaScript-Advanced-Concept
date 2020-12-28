var varVariable = "this is a var variable";

if (true) {
    console.log(varVariable);
}

if (true) {
    var varVariable = "this is again a var variable";
    var varVariable = "this is again again a var varibale";
}

console.log(varVariable);
let name = "Fahad Bin Munir";
function letFunc() {
    console.log(name);
    let letVariable = "this is a let variable";
    letVariable = "this is a new let variable";
    console.log(letVariable);
}

function constFunc() {
    const constVariable = "this is a const variable";
    console.log(constVariable);
}

constFunc();

letFunc();
