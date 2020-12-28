const promise1 = Promise.resolve("promise1 has been resolved");

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2 has been resolved");
    }, 3000);
});

// I want to resolve 2 promises in same time

Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
});

// I want to resolve the promise which executes first

Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
})