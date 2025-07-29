const choices = document.querySelectorAll('.myChoice');
const resultText = document.querySelector('.three p');
const humanScoreDisplay = document.querySelector('.human-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const computerImg = document.querySelector('.computer img');
const resetButton = document.querySelector('.three button');

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultText.textContent = "Tie!";
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    humanScore++;
    resultText.textContent = "You Win!";
  } else {
    computerScore++;
    resultText.textContent = "You Lose!";
  }

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;
    disableButtons();
    resultText.textContent = ''
    resultText.textContent = humanScore === 5 ? " You won the game!" : " Computer won the game!";
  }
}

function disableButtons() {
  choices.forEach(button => button.disabled = true);
}

function enableButtons() {
  choices.forEach(button => button.disabled = false);
}

function animateComputerChoice(callback) {
  const animationChoices = ['Rock', 'Paper', 'Scissors'];
  let index = 0;
  const interval = setInterval(() => {
    computerImg.src = `img/${animationChoices[index]}.jpg`;
    index = (index + 1) % animationChoices.length;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    callback(); // cuando termina la animación, ejecuta lo que sigue (la ronda)
  }, 800);
}

choices.forEach(button => {
  button.addEventListener('click', () => {
    if (gameOver) return;

    disableButtons();
    const humanChoice = button.value;

    animateComputerChoice(() => {
      const computerChoice = getComputerChoice();
      computerImg.src = `img/${computerChoice}.jpg`;
      playRound(humanChoice, computerChoice);

      if (!gameOver) {
        enableButtons();
      }
    });
  });
});

resetButton.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  humanScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  resultText.textContent = '';
  computerImg.src = 'img/Question.jpg';
  enableButtons();
});
