// Add a capitalizing method to the string prototype
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

// Generate random computer selection : rock, paper or scissors
function computerPlay() {
    // Generate random integer between 0 and 2
    randomInt = Math.floor(Math.random() * 3);
    // Declare array of return values
    playsArray = ["Rock", "Paper", "Scissors"]
    // Return value in array at index randomly generated
    return playsArray[randomInt];
}

// Compare playerSelection to computerSelection and return the message
function compareSelections(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 2;   // Draw
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return 1;   // 1 = Loss
    }
    else {
        return 0;   // 0 = win
    }
}

// Play round
function playRound(e) {
    const playerSelection = e.target.id.slice(4).capitalize();
    const computerSelection = computerPlay();
    const round = compareSelections(playerSelection, computerSelection);
    const currentPlayLog = document.querySelector("#currentPlay");
    switch (round) {
        case 0:
            currentPlayLog.textContent = `${playerSelection} beats ${computerSelection}: you win!`;
            break;
        case 1:
            currentPlayLog.textContent = `${playerSelection} is beaten by ${computerSelection}: you lose!`;
            break;
        case 2:
            currentPlayLog.textContent = `You both played ${playerSelection}: This is a draw!`;
            break;
    }
    updateScore(round);
}

function updateScore(round) {
    const scoreLog = document.querySelector("#score");
    score[round]++;
    scoreLog.textContent = `Player: ${score[0]} - Computer: ${score[1]} - Draws: ${score[2]}.`;
    if (round != 2 && score[round] >= 5) {
        endGame(round);
    }
}

function endGame(round) {
    messages = [`You win!`, `Sorry, computer wins...`];
    const scoreContainer = document.querySelector("#scoreContainer");
    const endGameLog = document.createElement("p");
    endGameLog.textContent = messages[round];
    scoreContainer.appendChild(endGameLog);
    buttons.forEach(button => button.removeEventListener("click", playRound));
}


// Initialize game
let score = [0, 0, 0]; // Player wins, Computer wins, Draw
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));