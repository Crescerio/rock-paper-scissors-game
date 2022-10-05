'use strict'

function getComputerChoice() {
    let myArray = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    
    let computerChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return computerChoice;
}

let playerChoice;
let computerChoice = getComputerChoice();
let roundNumber = 0;

function playRound(playerChoice, computerChoice){
    let result = 0;
    roundNumber += 1;
    console.log("----------- " + "Round " + roundNumber + " -----------");
    playerChoice = prompt("Rock, Paper, or Scissors?\nOpen the console to play the game (Press cancel, press the F12 key & reload the page)");
    computerChoice = getComputerChoice();
    console.log("Player's Choice: " + playerChoice);
    console.log("Computer's Choice: " + computerChoice);
    if(playerChoice == null){
        result = 3;
        return result;
    } else if(playerChoice.toLowerCase() === computerChoice.toLowerCase()){
        console.log("Tie Game");
        result = 2;
        return result;
    } 
    else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper"){
        console.log("You Lose");
        return result;
    }
    else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"){
        console.log("You Win");
        result = 1;
        return result;
    }
    else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        console.log("You Win");
        result = 1;
        return result;
    }
    else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors"){
        console.log("You Lose");
        return result;
    }
    else if(playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock"){
        console.log("You Lose");
        return result;
    }
    else if(playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"){
        console.log("You Win");
        result = 1;
        return result;
    } 
    else{
        console.log("Please enter a valid choice");
        result = 2;
        return result;     
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 5 && computerScore < 5){
        let roundResult = playRound(playerChoice, computerChoice);
        // console.log(roundResult);
            if (roundResult === 3){
                console.log("You've canceled the game. Goodbye.");
                return;
            }
            else if (roundResult === 2){
                console.log("Player's Score: " + playerScore + "\n" + "Computer's score: " + computerScore);
            } 
            else if (roundResult === 1){
                playerScore += 1;
                console.log("Player's Score: " + playerScore + "\n" + "Computer's score: " + computerScore);
            } 
            else if (roundResult === 0){
                computerScore += 1;
                console.log("Player's Score: " + playerScore + "\n" + "Computer's score: " + computerScore);
            }
        }
    if(playerScore > computerScore){
        console.log("----------- " + "Final Results" + " -----------");
        console.log("Final Score: " + playerScore + " - " + computerScore);
        console.log("You Win!");
    } else{
        console.log("----------- " + "Final Results" + " -----------");
        console.log("Final Score: " + playerScore + " - " + computerScore);
        console.log("Computer Wins.");
    }
}

game();


