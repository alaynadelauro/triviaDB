import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"

class TriviaService {
    async getTrivia() {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
        // console.log('response', response.data.results)
        const newQuestion = response.data.results.map(questionPOJO => new Trivia(questionPOJO))
        AppState.Questions = newQuestion
        // console.log('Array of Questions', AppState.Questions)
    }
    setActiveTrivia() {
        // debugger
        const trivia = AppState.Questions
        const randomIndex = Math.floor(Math.random() * trivia.length)
        const activeTrivia = trivia[randomIndex]
        AppState.activeTrivia = activeTrivia
        // console.log(activeTrivia)
    }
}


export const triviaService = new TriviaService()