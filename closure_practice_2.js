var num1 = 5;

var sum = function () {
    var num2 = 5;
    return function () {
        return num1;
    };
};

myFunc = sum();
console.log(myFunc());
console.dir(myFunc);