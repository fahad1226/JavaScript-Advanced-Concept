// currying kono programming concept na, eta just ekta paradigm (way of writing code)

function multiplier(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(multiplier(5)(5)(5));
// or
const step1 = multiplier(5);
const step2 = step1(5);
const step3 = step2(5);
console.log(step3);

// currying is beutifulness ta dekhi ebar

function customerDiscount(discount) {
    return (price) => {
        return price - price * discount;
    };
}

// আমি এখানে প্রতিবারই বলে দিচ্ছি যে ডিস্কাউন্ট ১০%। কিন্তু it doesnt make any sense in general.
// আমি তো জানিই ডিস্কাউন্ট ১০% তাহলে প্রতিবার বলে দিতে হবে কেন? এই জিনিষটা সল্ভ করার জন্য 'Currying' আমাদের হেল্প করবে।

const tenParcemtDiscount = customerDiscount(0.1); // this is called partial function
const customer1 = tenParcemtDiscount(500);
const customer2 = tenParcemtDiscount(600);
const customer3 = tenParcemtDiscount(700);
const customer4 = tenParcemtDiscount(800);

console.log(customer1, customer2, customer3, customer4);
