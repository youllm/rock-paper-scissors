const humanScoreEl = document.querySelector('.score.human');
const computerScoreEl = document.querySelector('.score.computer');

const humanEmojiEl = document.querySelector('.choise.human');
const computerEmojiEl = document.querySelector('.choise.computer');

const resultText = document.querySelector('.game-result-text');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        computerEmojiEl.textContent = "🪨";
        return "rock";
    } else if (randomNumber < 0.66) {
        computerEmojiEl.textContent = "📄";
        return "paper";
    } else {
        computerEmojiEl.textContent = "✂️";
        return "scissors";
    }
}

function getHumanChoice(humanChoice) {
    if (humanChoice === "rock") humanEmojiEl.textContent = "🪨";
    else if (humanChoice === "paper") humanEmojiEl.textContent = "📄";
    else if (humanChoice === "scissors") humanEmojiEl.textContent = "✂️";
    
    return humanChoice;
}

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();
    const human = getHumanChoice(humanChoice);

    if (human === computerChoice) {
        resultText.textContent = "Draw!"
        resultText.style.color = "purple";
    } 
    else if ((human === "rock" && computerChoice === "scissors") || (human === "scissors" && computerChoice === "paper") || (human === "paper" && computerChoice === "rock")) {
        resultText.textContent = "You Win!"
        resultText.style.color = "blue";
        humanScore++;
        humanScoreEl.textContent = humanScore
    } 
    else {
        resultText.textContent = "Computer Wins!"
        resultText.style.color = "red";
        computerScore++;
        computerScoreEl.textContent = computerScore
    }

    if (humanScore === 5 || computerScore === 5) {
        setTimeout(() => {
            if (humanScore > computerScore) {
                resultText.textContent = "You Are The Champion!";
                resultText.style.color = "blue";
            } else {
                resultText.textContent = "Computer Solo Diff!";
                resultText.style.color = "red";
            }
        }, 800 );
    }
}

document.querySelector('.rock').addEventListener('click', () => playRound('rock'));
document.querySelector('.paper').addEventListener('click', () => playRound('paper'));
document.querySelector('.scissors').addEventListener('click', () => playRound('scissors'));