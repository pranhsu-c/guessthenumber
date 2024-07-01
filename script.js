let randomNum = Math.round(Math.random() * 100 + 1)

const submit = document.querySelector("#submit")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevguess = []
let numOfGuesses = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    else if (guess < 1) {
        alert('please enter a valid number')
    }
    else if (guess > 100) {
        alert('please enter a valid number')
    }
    else {
        prevguess.push(guess)
        if (numOfGuesses >= 10) {
            displayGuess(guess)
            displayMsg(`game over. Random number was ${randomNum} `)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess == randomNum) {
        displayMsg('you guessed it right')
        endGame()
    }
    else if (guess < randomNum) {
        displayMsg('number is too low')
    }
    else if (guess > randomNum) {
        displayMsg('number is too high')
    }
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numOfGuesses++;
    remaining.innerHTML = `${11 - numOfGuesses}`
}
function displayMsg(msg) {
    lowOrHi.innerHTML = `<h3>${msg}</h3>`
}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame() {
    let newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click', function () {
        let randomNum = Math.round(Math.random() * 100 + 1)
        prevguess = ''
        numOfGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numOfGuesses}` 
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })
}