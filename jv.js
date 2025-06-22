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
    if (humanChoice=='rock'){
        if(computerChoice=='rock'){
            console.log('tie')
        }
        else if (computerChoice=='paper'){
            console.log('loss')
            computerScore+=1;
        }
        else{
            console.log('win')
            humanScore+=1;
        }
    }
    if (humanChoice=='paper'){
        if(computerChoice=='paper'){
            console.log('tie')
        }
        else if (computerChoice=='rock'){
            console.log('win')
            humanScore+=1;
        }
        else{
            console.log('loss')
            computerScore+=1;
        }
    }
    if (humanChoice=='scissor'){
        if(computerChoice=='scissor'){
            console.log('tie')
        }
        else if (computerChoice=='paper'){
            console.log('win')
            humanScore+=1;
        }
        else{
            console.log('loss')
            computerScore+=1;
        }
    }
}

function playGame(){
    for(let i=1;i<=5;i++){
        playRound(getHumanChoice(),getComputerChoice())
        console.log("your score: " + humanScore)
        console.log("computer score: " + computerScore)
    }
}

playGame()