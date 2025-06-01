
let getComputerChoice = () => { 
    let result = Math.floor((Math.random() * 3) + 1);
    if (result === 1) {
        return 'rock';
    } else if (result === 2){
        return 'paper';
    } else {
        return 'scissors';
    }
}

let getHumanChoice = () => prompt("Let's play 5 Rounds of ROCK PAPERS AND SCISSORS!", "Rock").toLowerCase();

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function playGame () {

    let humanScore = 0;
    let computerScore = 0;
    let invalid = false

    function playRound (humanChoice , computerChoice){
        
        if (humanChoice === 'paper' && computerChoice === 'paper'){
            console.log ("It's a Draw!")
        } else if (humanChoice === 'paper' && computerChoice === 'rock'){
            console.log ("You Win this Round!")
            ++humanScore
        } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
            console.log ("You Lose this Round!")
            ++computerScore
        } else if (humanChoice === 'rock' && computerChoice === 'rock'){
            console.log ("It's a Draw!")
        } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
            console.log ("You Win this Round!")
            ++humanScore
        } else if (humanChoice === 'rock' && computerChoice === 'paper'){
            console.log ("You Lose this Round!")
            ++computerScore
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors'){
            console.log ("It's a Draw!")
        } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log ("You Win this Round!")
            ++humanScore
        } else {
            console.log ("You Lose this Round!")
            ++computerScore
        }
        console.log (`Computer Points: ${computerScore}`);
        console.log (`Your Points: ${humanScore}`);
    }

    for (let i=1 ; i<6 ; i++) {
        
        if (humanChoice ==='rock' || humanChoice ==='paper' || humanChoice ==='scissors') {
            console.log (`Round ${i}`)
            playRound (humanChoice, computerChoice);
            computerChoice = getComputerChoice();
            if (i < 5) {
                humanChoice = getHumanChoice();
            }
        } else {
            console.log ('Wrong Input: Use only rock, paper or scissors!')
            invalid = true
            break;
        }

    }

    if (invalid){
        console.log("Game is Invalid now, reload the page.")
    } else if (humanScore > computerScore){
        console.log("Congratulations you are the champion!")
    } else if (humanScore < computerScore){
          console.log("You are a LOSER!")
    } else {
         console.log("Nobody Wins, this time.")}
}

playGame()
