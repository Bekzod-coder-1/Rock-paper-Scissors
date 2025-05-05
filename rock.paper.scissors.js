// ROCK PAPER SCISSORS GAME 

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

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;


function playRound(playerSelection){
    
    if(gameOver){
        return;
    }
    const computerPlayer = getComputerChoice();

    let resultDiv = document.querySelector("#result");
    let scoreDiv = document.querySelector("#score");

    if(playerSelection === computerPlayer){
        resultDiv.textContent = "it is tie!";
    }else if(playerSelection === "rock" && computerPlayer === "scissors"||
           playerSelection === "scissors" && computerPlayer ==="paper"||
           playerSelection === "paper" && computerPlayer === "rock"
    ){
        humanScore++
        resultDiv.textContent = "you win!";
    }else{
        computerScore++
        resultDiv.textContent = "you lose!";
    }
    scoreDiv.textContent = "Your points " + humanScore + " und  Points of PC  " + computerScore;
    
    if(humanScore === 5){
        gameOver = true;
        resultDiv.textContent = " You won the game! "
    } else if (computerScore === 5){
        gameOver = true;
        resultDiv.textContent = " PC won the game! "
    }else {
        return false;
    }
  };
rockButton.addEventListener("click", ()=>{// hier braucht man ()=> weil man drei Event in einer function machen möchte.
    playRound("rock" )
});
paperButton.addEventListener("click", ()=>{
    playRound("paper" )
});
scissorsButton.addEventListener("click", ()=>{
    playRound("scissors" )
});

let restartGame = document.querySelector("#restart");

function nwGame (){
    humanScore = 0;
    computerScore = 0;
    gameOver = false;

    let resultDiv = document.querySelector("#result");
    resultDiv.textContent = " The game is restarted! ";

    let scoreDiv = document.querySelector("#score");
    scoreDiv.textContent = " Your points is " + humanScore + " the Points of PC " + computerScore;
}
restartGame.addEventListener("click", nwGame);// in diesem Fall braucht man das nicht ()=> zusätzlich