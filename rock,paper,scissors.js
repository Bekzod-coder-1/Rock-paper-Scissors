// ROCK PAPER SCISSORS GAME
console.log("Welcome to the Rock-Paper-Scissors game!");

function getComputerChoice(){//here to give random answer from the pc
    let random = Math.floor(Math.random() * 3);// with Support Math
    if (random === 0){
        return "rock";
    } else if (random === 1){
        return "paper";
    } else {
        return "scissors";
    }   
}

function getHumanChoice(){
     let choice;//here choice value is for while code
    while(true){// the code if human gave false than return please give the correct form
    choice = prompt("Please ! choice one of the ROCK, PAPER or SCISSORS").toLowerCase();
    if ( choice === "rock"|| choice === "paper" || choice === "scissors"){
        return choice;
    }
    console.log(" Invalid choice! Please enter rock, paper or scissors.")
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){//decide which one of them wins

if (humanChoice === computerChoice){
    return "It is tie!";
}else if(
    (humanChoice === "rock" && computerChoice === "scissors")||
    (humanChoice === "scissors" && computerChoice === "paper")||
    (humanChoice === "paper" && computerChoice === "rock")
){
    humanScore++;
    return "You win";
}else{
    computerScore++;
    return "PC win";
}
}

function playGame(){// the game is going to 5 Round 

    for (let i = 0; i < 5; i++){//for round definition
           const humanSelection = getHumanChoice();
           const computerSelection = getComputerChoice();

           console.log( "Round " + (i + 1));
           console.log("You chose " + humanSelection);
           console.log("PC chose " + computerSelection);

           const result = playRound(humanSelection, computerSelection);
           console.log(result);

           if (result === humanSelection ){
            humanScore++;
           } else if (result === computerSelection ){
            computerScore++;
           }
           console.log("Current score -> You: " + humanScore +"| PC: " + computerScore);       
    }

    if(humanScore > computerScore){
        console.log("Congratulations! You win game ");
    } else if (computerScore > humanScore){
        console.log(" PC wins the game");
    } else {
        console.log(" It is tie ! ");
    }
}

playGame();
console.log("The game end");