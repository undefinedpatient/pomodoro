import { StatefulHTMLElement, State } from "../utils/state.js";
import Timer from "../utils/timer.js";
class PTimerCard extends StatefulHTMLElement {
    constructor() {
        super();
        this.timer = new Timer(this);
        this.innerHTML = `
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
        const resumeButton = this.querySelector(".resume-button");
        const resetButton = this.querySelector(".reset-button");

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
        const timerDisplay = this.querySelector(".timer-display");
        const resumeButton = this.querySelector(".resume-button");
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