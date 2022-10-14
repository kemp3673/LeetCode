/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let time = logs[0][1];
    let id = logs[0][0];
    for (var i = 1; i < logs.length; i++) {
        let currentTime = logs[i][1]-logs[i-1][1];
        if (currentTime > time) {
            time = currentTime;
            id = logs[i][0];
        } else if (currentTime === time) {
            id = Math.min(id, logs[i][0]);
        }
    }
    return id;
};