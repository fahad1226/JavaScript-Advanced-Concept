// const makeFun = () => {
//     let name = 'Fahad'
//     return name
// }

// console.log(makeFun());

var x = 10; // global scope
let w = 200;
const c = 3.1416;


function testVar() {
    function childOfTestVar() {
        let test1 = 'test 1';
        console.log(test1);

        const childOfChild = () => {
            var child = 'Child Var';
            console.log(child);
            console.log(w);
            console.log(c);
            console.log(x = 2000);
        }

        //console.log(child);

        childOfChild();
    }

    childOfTestVar();
    console.log(y);
    if (true) {
        var y = 20;
        console.log(x);
    }
    console.log(y);
    //console.log(test1);
}


if (true) {
    var name = 'fahad';
    
}

console.log(name);
testVar();