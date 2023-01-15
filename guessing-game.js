

function guessingGame() {
    let hasWon = false;
    let randNum = Math.floor(Math.random()*100);
    let guessCount = 0;

    return function guessNum(guessedNum){
        if(hasWon){
            return 'The game is over, you already won!';
        }

        guessCount ++;
    
        if(randNum === guessedNum){
            hasWon = true;
            let message = `You win! You found ${randNum} in ${guessCount} guesses.`;
            return message;
        }
        if(guessedNum > randNum){
            return `${guessedNum} is too high!`;
        }
        if(guessedNum < randNum){
            return `${guessedNum} is too low!`;
        };
    
    };
}

module.exports = { guessingGame };
