import Timer from "../utils/timer.js";

class PTimerCard extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: "closed"});
        this.timer = new Timer(this);
        this.root.innerHTML = `
            <link rel="stylesheet" href="/pomodoro/styles.css"></link>
            <span class="timer-display">${this.timer.toString()}</span>
            <div class="timer-button">
                <button class="resume-button">Start</button>
                <button class="reset-button">Reset</button>
            </div>
        `;
    }
    connectedCallback() {
        this.setupEventListeners();
    }
    setupEventListeners() {
        
        const resumeButton = this.root.querySelector(".resume-button");
        const resetButton = this.root.querySelector(".reset-button");

        resumeButton.addEventListener("click", () => {
            switch (resumeButton.textContent) {
                case "Start":
                    resumeButton.textContent = "Stop";
                    break;
                case "Resume":
                    resumeButton.textContent = "Stop";
                    break;
                case "Stop":
                    resumeButton.textContent = "Resume";
                    break;
                default:
                    break;
            }
            this.timer.toggle();

        });
        resetButton.addEventListener("click", () => {
            resumeButton.textContent = "Start";
            this.timer.reset();

        });
    }
    update() {
        const timerDisplay = this.root.querySelector(".timer-display");
        const resumeButton = this.root.querySelector(".resume-button");
        if (timerDisplay == null) {
            throw new Error("What");
        }
        if (this.timer.id==null){
            resumeButton.textContent = "Start";
        }
        timerDisplay.textContent = this.timer.toString();
    }
}

customElements.define("p-timer-card", PTimerCard);