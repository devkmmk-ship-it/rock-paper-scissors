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

