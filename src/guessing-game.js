class GuessingGame {
    constructor() {
        this.minimum = null;
        this.maximum = null;
    }
//this method accepts min and max value of range of number to guess
    setRange(min, max) { 
        this.minimum = min;
        this.maximum = max;
    }
//this method returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() { 
        return Math.ceil((this.maximum+this.minimum)/2);        
    }
//this method is called if prev call of guess() returned number which is greater than answer
    lower() { 
        this.maximum = this.guess();
    }
//this method is called if prev call of guess() returned number which is lower than answer
    greater() {
        this.minimum = this.guess();
    }
}

module.exports = GuessingGame;
