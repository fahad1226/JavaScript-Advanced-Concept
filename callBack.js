// সোজা বাংলায় বলতে গেলে কলব্যাক মানে হলো, কোনো একটা কাজ শেষ করে অন্য একটা কাজকে কল করা।
// যেমন একটা রেস্টুরেন্টে একজন ওয়েটার একটা টেবিল এর অর্ডার নিয়ে কিচেনে যাবে, এবং কিচেনের শেফকে বলবে যে তোমার রান্না শেষ হলে "কল মি ব্যাক" আমি এসে অর্ডার টা সার্ভ করবো।
// in the meantime আমি আরেকটা অর্ডার নিয়ে আসি।
// আমি 'CallBack' ইউজ করবো আমার কাজের কন্ট্রোল ফ্লো ঠিক রাখার জন্য, মানে এই কাজটা শেষ হবার পর যেন এরপরের কাজটা করে।
const takeOrder = (customer, callback) => {
    console.log("taking order from customer " + customer);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`processing order from ${customer}`);
    setTimeout(() => {
        console.log("cooking completed");
        console.log(`order processed from ${customer}`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`complete order from ${customer}`);
};

takeOrder("Customer 1", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

/* takeOrder("Customer 1", (customer) => {  
    processOrder(customer, (customer) => {
        completeOrder1(customer, (customer) => {
            completeOrder2(customer, (customer) => {
                completeOrder3(customer, (customer) => {
                    completeOrder4(customer, (customer) => {
                        completeOrder5(customer, (customer) => {
                            completeOrder6(customer);           // this is called "callback hell"
                        });
                    });
                });
            });
        });
    });
}); */

console.log("hello Fahad, to test that up above all functions are asynchronus");
