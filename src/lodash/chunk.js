const _ = require("lodash");
const months = ['jan', 'feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
console.log(_.chunk(months, 3))
module.exports.chunk = months
