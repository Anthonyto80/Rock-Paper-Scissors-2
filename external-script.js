// Lets Computer Play their Choice

function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random()*3)];
    return(computerChoice)
}

var playerChoice
var lowercaseChoice 
var computerChoice 

function createChoice(){
    playerChoice = prompt("Enter your choice:");
    lowercaseChoice = playerChoice.toLowerCase();
    computerChoice = getComputerChoice();
    return lowercaseChoice;
    return computer
}

// Creates Game Logic

computerScore = 0
playerScore = 0


function fight(player, computer){
    if (player === "rock" &&  computer === "paper") {
        alert("You Lose! " + player.toUpperCase() + " beats " + computer.toUpperCase());
        computerScore++;
    }   else if (player === "rock" && computer === "scissor"){
         alert("You Win! " + player.toUpperCase() + " beats " + computer.toUpperCase());
         playerScore++
    }    else if (player === "paper" && computer === "rock"){
          alert("You Win! " + player.toUpperCase() + " beats " + computer.toUpperCase());
          playerScore++
    }    else if (player === "paper" && computer === "scissor"){
          alert("You Lose! " + player.toUpperCase() + " beats " + computer.toUpperCase());
          computerScore++;
    }    else if (player === "scissor" && computer === "rock"){
          alert("You Lose! " + player.toUpperCase() + " beats " + computer.toUpperCase());
          computerScore++;
    }    else if (player === "scissor" && computer === "paper"){
          alert("You Win! " + player.toUpperCase() + " beats " + computer.toUpperCase());
          playerScore++
    }    else{
          alert("It's a tie! No one wins!");
        }    

    alert("Player Score: " +playerScore + " and Computer Score: " + computerScore)    
    }

function Game(){
    createChoice();
    fight(lowercaseChoice,computerChoice);
    createChoice();
    fight(lowercaseChoice,computerChoice);
    createChoice();
    fight(lowercaseChoice,computerChoice);
    createChoice();
    fight(lowercaseChoice,computerChoice);
    createChoice();
    fight(lowercaseChoice,computerChoice);
}

Game()