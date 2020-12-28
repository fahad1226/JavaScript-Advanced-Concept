
var num2 = 20;

var sum = () => {
    var num1 = 10;
    return function() {
        return num1 + num1;
    }
}

var myFunc = sum()
console.dir(myFunc)

(function () {  // this is anonymous function, which can call itself
    var number1 = 100;  
    var number2 = 200;
    var result = number1 + number2;
    console.log(result)
})();

h