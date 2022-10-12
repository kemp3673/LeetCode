/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        let x = Math.max.apply(null, stones);
        stones.splice(stones.indexOf(x), 1)
        let y = Math.max.apply(null, stones);
        stones.splice(stones.indexOf(y), 1)
        if (x > y) {
            x -= y;
            stones.push(x);
        }
    } 
    if (stones.length > 0) {
        return stones[0];
    } else {
        return 0;
    }
};