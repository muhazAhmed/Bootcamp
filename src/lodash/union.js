const _ = require("lodash");
const array = [[1,2],[2,3],[4,5],[5,6],[6,7]]
let merge =_.union(array)
function removeDuplicates(merge) {
    return merge.filter((item,
        index) => merge.indexOf(item) === index);
}
console.log(removeDuplicates(merge));
module.exports.union = removeDuplicates(merge)