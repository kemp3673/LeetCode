/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let x = 0;
    let y = 0;
    let remainingSecret = secret.split('');
    let remainingGuess = guess.split('');
    
    for (var i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            x++;
            let secretIndex = remainingSecret.indexOf(guess[i]);
            remainingSecret.splice(secretIndex, 1);
            let guessIndex = remainingGuess.indexOf(guess[i]);
            remainingGuess.splice(guessIndex, 1);
        }
    }    
    for (var k = 0; k < remainingGuess.length; k++) {
        let remainingSecretIndex = remainingSecret.indexOf(remainingGuess[k]);
        if (remainingSecretIndex !== -1) {
            y++;
            remainingSecret.splice(remainingSecretIndex, 1);
        }
    }
    
    return `${x}A${y}B`; 
};