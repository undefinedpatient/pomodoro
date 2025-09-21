class Timer {
    constructor(element) {
        /**
         * @type {int}
         */
        this.remainingSec = 5;
        /**
         * @type {int}
         */
        this.phraseNumber = 0;
        /**
         * @type {HTMLElement}
         */
        this.element = element;
        /**
         * @type {int}
         */
        this.id = null;
    }
    // Toggle Timer
    toggle() {
        if (this.id != null) {
            clearInterval(this.id);
            this.id = null;
            return;
        }
        this.id = setInterval(() => {
            this.remainingSec = this.remainingSec - 1;
            if (this.remainingSec <= 0) {
                let notification = new Notification("Pomodoro", {body: this.getPhraseText()});
                this.phraseNumber = (this.phraseNumber + 1) % 8;
                clearInterval(this.id);
                this.id = null;
                // 
                if(this.phraseNumber==7){
                    this.remainingSec = 30*60;
                }
                else if (this.phraseNumber % 2 == 0) {
                    this.remainingSec = 25*60;
                } else if (this.phraseNumber % 2 == 1) {
                    this.remainingSec = 5*60;
                } 
            }
            this.element.update(this.remainingSec);
        }, 1000);
    }
    getPhraseText(){
        if(this.phraseNumber == 6){
            return "Time for Longer Rest!";
        }
        if(this.phraseNumber%2==1){
            return "Time for a rest!";
        }
        return "Time to work!";
    }
    
    reset() {
        if (this.id != null) {
            clearInterval(this.id);
            this.id = null;
        }
        this.phraseNumber = 0;
        this.remainingSec = 25*60;
        this.element.update(this.remainingSec);
    }
    // Override
    toString() {
        return `${(Math.floor(this.remainingSec / 60)).toString().padStart(2, "0")}:${(this.remainingSec % 60).toString().padStart(2, "0")}`;
    }
}

export default Timer;