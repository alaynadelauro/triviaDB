import { generateId } from "../utils/GenerateId.js"

export class Trivia {
    constructor(data) {
        this.Id = generateId()
        this.question = data.question
        this.rightAnswer = data.correct_answer
    }
    get triviaCard() {
        return `
        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 d-flex justify-content-center">
                <img class="image-fluid logo"src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlc3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60">
            </div>
            <div class="col-12 text-center m-5 p-5">
                <h1 class="fw-bold">
                    ${this.question}
                </h1>
            </div>
        </div>
        <div class="row text-center my-5">
            <div class="col-6">
                <button class="btn fs-3 true fw-bold" onclick="app.TriviaController.answerTrue()">
                    True
                </button>
            </div>
            <div class="col-6">
                <button class="btn fs-3 false fw-bold" onclick ="app.TriviaController.answerFalse()">
                    False
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center mt-5">
            <p class="fs-3 fw-bold">Your Score: <span id="points">0</span> points</p>
            </div>
            <div class="col-12 text-center">
            <div>
            <button class="btn fs-4 text-center mt-3" onclick="app.TriviaController.resetScore()">Reset Score</button>
            </div>
            </div>
        </div>
        </div>
        `
    }
}