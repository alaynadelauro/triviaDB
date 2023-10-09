import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"


function _drawActiveTrivia() {
    let content = ''
    // console.log('Active trivia?', AppState.activeTrivia)
    // console.log('Questions?', AppState.Questions)
    let currentTrivia = AppState.activeTrivia
    content += currentTrivia.triviaCard
    setHTML('router-view', content)
    // console.log(content)
}
function _drawPoints() {
    let content = ''
    let points = AppState.points
    content += points
    const pointCount = document.getElementById('points')
    pointCount.innerText = AppState.points
}

export class TriviaController {
    constructor() {
        // console.log('the controller loaded')
        this.getTrivia()
        // this.setActiveTrivia()
        // console.log(AppState.activeTrivia)
        // _drawActiveTrivia()
        // AppState.on('Questions', _drawActiveTrivia)
    }
    async getTrivia() {
        try {
            await triviaService.getTrivia()
            // console.log('trivia gotten', AppState.Questions)
            this.setActiveTrivia()
        }
        catch (error) {
            console.log(error)
        }
    }
    setActiveTrivia() {
        triviaService.setActiveTrivia()
        // console.log('active trivia', AppState.activeTrivia)
        _drawActiveTrivia()
        _drawPoints()
    }
    answerTrue() {
        // console.log('button clicked')
        if (AppState.activeTrivia.rightAnswer == "True") {
            Pop.success('Correct!!!')
            AppState.points++
        } else {
            Pop.error("You'll get 'em next time")
            AppState.points--
        }
        this.setActiveTrivia()
    }
    answerFalse() {
        if (AppState.activeTrivia.rightAnswer == "False") {
            Pop.success('Correct!!!')
            AppState.points++
        } else {
            Pop.error("You'll get 'em next time")
            AppState.points--
        }
        this.setActiveTrivia()
    }
    resetScore() {
        AppState.points = 0
        console.log(AppState.points)
        _drawPoints()
    }
}