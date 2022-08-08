const _ = require("lodash");
const movie =  [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
let title = _.fromPairs(movie);
console.log(title)

module.exports.fromPairs = title