//Variables globales
let humanScore = 0;
let computerScore = 0;

//Da numero aleatorio
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Ordenador elige numero aleatorio cada numero es piedra papel o tijera
function getComputerChoice(){
    const numeroRan = getRandomInt(3);

    if(numeroRan === 0){
        return "rock";
    }else if(numeroRan === 1){
        return "paper";
    }else if(numeroRan === 2){
        return "scissors";
    }
}


//Pides eleccion humano
function getHumanChoice(){
    const accion = prompt("Choose between rock, paper o scissors: ");
    return accion.toLowerCase();
}



function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    }else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    
    console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
}


function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // ganador final
    console.log("=== Final Result ===");

    if(humanScore > computerScore) {
        console.log("Congratulations! You won the game");
    }else if(computerScore > humanScore) {
        console.log("Sorry, the computer wins ");
    }else{
        console.log("It's a draw!");
    }
}

// Iniciar el juego
playGame();


