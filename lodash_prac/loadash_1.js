const _ = require("lodash");

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const one = _.chunk(numbers, 3);

const arrayWithFalsy = [0, 1, false, 2, "", 3];

console.log(arrayWithFalsy);
const removeFalsyValues = _.compact(arrayWithFalsy);
console.log(removeFalsyValues);

const concateArray = _.concat(numbers, [6],[7],[[9]])

console.log(concateArray);

const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

const droppedUsersByKey = _.dropRightWhile(users, function(o) { return !o.active; });

console.log(droppedUsersByKey);

const dropUsersObject = _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
console.log(dropUsersObject);

