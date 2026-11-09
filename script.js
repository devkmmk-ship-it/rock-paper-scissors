let humanScore = 0
let computerScore = 0
const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()


function getComputerChoice() {
    const random = Math.random()
    if (random < 0.33) {
        return "Rock"
    } else if (random < 0.66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    const userInput = prompt("Input: Rock Or Paper Or Scissors").toLowerCase()
    if (userInput === "rock") {
        return "Rock"
    } else if (userInput === "paper") {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++
        return "You win! Rock beats Scissors"
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++
        return "You win! Paper beats Rock"
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++
        return "You win! Scissors beats Paper"
    } else if (humanChoice === computerChoice) {
        return "Draw"
    } else {
        computerScore++
        return `You Lose ${computerChoice} beats ${humanChoice}`
    }
}




console.log(playRound(humanChoice, computerChoice))
console.log("Human Choice: "+ humanChoice)
console.log("Computer Choice: "+ computerChoice)
console.log("Human Score: "+ humanScore)
console.log("Computer Score: "+ computerScore)






