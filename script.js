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
        return "D";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return "L";
    }
    else {
        return "W";
    }
}

// Get player input
function getPlayerInput() {
    let message = `Your turn:`
    let keepAsking = true;
    while (keepAsking) {
        playerSelection = prompt(message);
        if (playerSelection === null) {
            return null;
        } else {
            playerSelection = playerSelection.capitalize();
        }
        keepAsking = !(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors");
        message = `Please enter a valid selection (rock, paper or scissors) !`;
    }
    return playerSelection;
}

// Play 5 rounds
function game() {
    let score = [0, 0, 0]; // Player wins, Computer wins, Draw
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerInput();
        const computerSelection = computerPlay();
        const round = compareSelections(playerSelection, computerSelection);
        switch (round) {
            case "W":
                console.log(`${playerSelection} beats ${computerSelection}: you win!`);
                score[0]++;
                break;
            case "L":
                console.log(`${playerSelection} is beaten by ${computerSelection}: you lose!`);
                score[1]++;
                break;
            case "D":
                console.log(`You both played ${playerSelection}: This is a draw!`);
                score[2]++;
                break;
            default:
                console.log(`Something went wrong.`);
        }
    }
    if (score[0] > score[1]) {
        console.log(`You win ${score[0]} to ${score[1]}!`);
    } else if (score[0] < score[1]) {
        console.log(`You lose ${score[0]} to ${score[1]}!`);
    } else {
        console.log(`This is a draw: ${score[0]} to ${score[1]}!`);
    }
}

