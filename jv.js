function getComputerChoice(){
    let v = Math.random();
    if(v>=0 && v<=1/3){
        return 'rock';
    }
    else if(v>1/3 && v<=2/3){
        return 'paper';
    }
    else {
        return 'scissor';
    }
}
function getHumanChoice(){
    return prompt("enter rock paper or scissor");
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase()
    let score = document.querySelector("#score");
    if (humanChoice=='rock'){
        if(computerChoice=='rock'){
            score.textContent = `ROCK VS ROCK : TIE. Computer score: ${computerScore} | Human score: ${humanScore}`;
        }
        else if (computerChoice=='paper'){
            computerScore+=1;
            score.textContent = `ROCK VS PAPER : LOSS. Computer score: ${computerScore} | Human score: ${humanScore}`;
        }
        else{
            humanScore+=1;
            score.textContent = `ROCK VS SCISSORS : WIN. Computer score: ${computerScore} | Human score: ${humanScore}`;
        }
    }
    if (humanChoice=='paper'){
        if(computerChoice=='paper'){
            score.textContent = `PAPER VS PAPER : TIE. Computer score: ${computerScore} | Human score: ${humanScore}`;
        }
        else if (computerChoice=='rock'){
            humanScore+=1;
            score.textContent = `PAPER VS ROCK : WIN. Computer score: ${computerScore} | Human score: ${humanScore}`;
        }
        else{
            computerScore+=1;
            score.textContent = `PAPER VS SCISSORS : LOSS. Computer score: ${computerScore} | Human score: ${humanScore}`;
        }
    }
    if (humanChoice=='scissor'){
        if(computerChoice=='scissor'){
            score.textContent = `SCISSORS VS SCISSORS : TIE. Computer score: ${computerScore} | Human score: ${humanScore}`;
        }
        else if (computerChoice=='paper'){
            humanScore+=1;
            score.textContent = `SCISSORS VS PAPER : WIN. Computer score: ${computerScore} | Human score: ${humanScore}`;
        }
        else{
            computerScore+=1;
            score.textContent = `SCISSORS VS ROCK : LOSS. Computer score: ${computerScore} | Human score: ${humanScore}`;
        }
    }
    if (humanScore===5 || computerScore===5){
        let result = document.querySelector('#result');
        result.textContent = humanScore===5?"YOU WIN THE GAME":"YOU LOSE THE GAME";
        humanScore=0;
        computerScore=0;
    }
    else{
        let result = document.querySelector('#result');
        result.textContent = '';
    }
}

let btns = document.querySelectorAll(".btn");

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(btn.textContent === "ROCK"){
            playRound('rock',getComputerChoice());
        }
        else if(btn.textContent === "PAPER"){
            playRound('PAPER',getComputerChoice());
        }
        else{
            playRound("scissor",getComputerChoice());
        }
    })
});