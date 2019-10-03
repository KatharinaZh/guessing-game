class GuessingGame {
    constructor() {
        this.minimum = null;
        this.maximum = null;
    }
    setRange(min, max) { 
        this.minimum = min;
        this.maximum = max;
    }
    guess() { 
        return Math.ceil((this.maximum+this.minimum)/2);        
    }
    lower() { 
        this.maximum = this.guess();
    }
    greater() {
        this.minimum = this.guess();
    }
}

module.exports = GuessingGame;
