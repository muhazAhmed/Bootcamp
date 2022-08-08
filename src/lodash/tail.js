const _ = require('lodash');
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let newArray = _.tail(array);
console.log(newArray);

module.exports.tail = newArray