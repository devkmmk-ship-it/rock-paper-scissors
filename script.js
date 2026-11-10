let humanScore = 0
let computerScore = 0



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
    let message = ""
    if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
       (humanChoice === "Paper" && computerChoice === "Rock") || 
       (humanChoice === "Scissors" && computerChoice === "Paper")) {
        humanScore++
        message = `You win, ${humanChoice} beats ${computerChoice}`
        return message
    }  else if (humanChoice === computerChoice) {
        message = "Draw"
        return message
    } else {
        computerScore++
        message = `You Lose, ${computerChoice} beats ${humanChoice}`
        return message
    }
}


function playGame() {

    let result = ""

    for (let i=0; i<5; i++) {
         let humanSelection = getHumanChoice()
         let computerSelection = getComputerChoice() 
       console.log(`
                    Human choose ${humanSelection} and Computer choose ${computerSelection}
                    ${playRound(humanSelection, computerSelection)}
                    Human Score: ${humanScore} <> Computer Score: ${computerScore}
                        `)   
    }

    if (humanScore > computerScore) {
        result = "Human Wins"
    } else if (humanScore < computerScore) {
        result = "Computer Wins"
    } else {
        result = "It's a tie!"
    }
   
    console.log(result)
}

playGame()











