/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let frequencyOfWords = frequencyFinder(words);
    let sorted = wordsSorter(frequencyOfWords);
    return sorted.slice(0, k)  
};

var wordsSorter = function(wordsObj) {
    let keys = Object.keys(wordsObj);
    let sortedArray = [];
    while (keys.length > 0) {
        let word = keys[0];
        keys.splice(0, 1);
        if (sortedArray.length === 0) {
            sortedArray.push(word);
        } else {
            for (var i = 0; i < sortedArray.length; i++) {
                if (wordsObj[word] === wordsObj[sortedArray[i]]) {
                    if (word < sortedArray[i]) {
                        sortedArray.splice(i, 0, word);
                        break;
                    }
                } else if (wordsObj[word] > wordsObj[sortedArray[i]]) {
                    sortedArray.splice(i, 0, word);
                    break;
                } 
                if (i === sortedArray.length - 1) {
                    sortedArray.push(word);
                    break;
                }
            }
        }
    }
    return sortedArray;
}

var frequencyFinder = function(wordsArray) {
    let wordFrequency = {};
    wordsArray.forEach(word => {
        if (wordFrequency[word]) {
            wordFrequency[word] += 1;
        } else {
            wordFrequency[word] = 1;
        }
    })
    return wordFrequency;
}