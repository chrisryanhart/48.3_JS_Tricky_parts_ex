function createAccount(pin, amount = 0) {


    return {
        checkBalance(pinGuess){
            if(pinGuess === pin){
                return `$${amount}`;
            }else{
                return 'Invalid PIN.'
            }
        },
        deposit(pinGuess,depositAmt){
            if(pinGuess === pin){
                amount = amount + depositAmt;
                return `Successfully deposited $${depositAmt}. Current balance: $${amount}.`;
            }else{
                return 'Invalid PIN.'
            }
        },
        withdraw(pinGuess,withdrawAmt){
            if(pinGuess === pin){
                if(withdrawAmt > amount){
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }

                amount = amount - withdrawAmt;
                return `Successfully withdrew $${withdrawAmt}. Current balance: $${amount}.`;
            }else{
                return 'Invalid PIN.'
            }    
        },
        changePin(pinGuess,updatedPin){
            if(pinGuess === pin){
                pin = updatedPin;
                return "PIN successfully changed!";
            }else{
                return 'Invalid PIN.'
            }
        }
    }

}

module.exports = { createAccount };
