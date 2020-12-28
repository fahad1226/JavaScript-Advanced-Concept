var LANGUAGE = "Java";
var language = "JavaScript";

function getLanguage() {
    // var language = undefined;
    if (!language) {
        var language = LANGUAGE;
    }
    p;
    return language;
}

console.log(`I love ${getLanguage()}`);

var testVar;

if (!testVar) {
    console.log("it is defined!");
}

function myFunc() {
    vasha = "Bangla";
    var vasha;
    console.log(vasha);
}

myFunc();

let lastFunc = function () {
    var language = "JavaScript";
    return language;
};

console.log(lastFunc());

