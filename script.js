let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const choice = prompt("Enter your choice (Rock, Paper, or Scissors):");
    return choice.toLowerCase().trim();
}

function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`Your choice is: ${humanChoice}`);
    console.log(`Computer choice is: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("You are winner!");
        humanScore++;
    } 
    else {
        console.log("Computer wins!");
        computerScore++;
    }
}

function playGame() {
    const rounds = 5;
    
    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`);
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        console.log(`Score: Human - ${humanScore} | Computer - ${computerScore}`);
    }

    console.log("GAME OVER");

    if (humanScore > computerScore) {
        console.log("You are the champion!");
    } else if (computerScore > humanScore) {
        console.log("Computer solo diff!");
    } else {
        console.log("GG! It's a Tie!");
    }
}

playGame();