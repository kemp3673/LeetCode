/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

// ["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"]
// [17233,32521,14087,42738,46669,65662,43204,8224]

var sortPeople = function(names, heights) {
    let combinedArray = [];
    for (var p = 0; p < names.length; p++) {
        combinedArray.push([names[p], heights[p]]);
    };
    
    combinedArray.sort((a,b) => {
        return b[1] - a[1];
    })
    
     let result = [];
    combinedArray.forEach(person => {
        result.push(person[0]);
    })
    return result;
};