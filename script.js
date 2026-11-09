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

