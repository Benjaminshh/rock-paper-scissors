function computerPlay(){
    let options = ["Rock","Paper","Scissors"];
    let randomNumber = Math.floor(Math.random()*options.length);
    return(options[randomNumber]);
}
function playRound(playerSelection,computerSelection){
    let player = playerSelection.slice(0,1).toUpperCase() + 
                 playerSelection.slice(1).toLowerCase();
    let computer = computerSelection;
    if(player == computer){
        return(`Tie! Both are ${player}`)
    }
    if(player == "Rock" ){
        if(computer == "Paper"){
            return("You Lose! Paper beats Rock!")
        }
        else
            return("You Win! Rock beats Scissors!")
    }
    if(player == "Paper" ){
        if(computer == "Scissors"){
            return("You Lose! Scissors beats Paper!")
        }
        else
            return("You Win! Paper beats Rock!")
    }
    if(player == "Scissors" ){
        if(computer == "Rock"){
            return("You Lose! Rock beats Scissors!")
        }
        else
            return("You Win! Scissors beats Paper!")
    }
}
function score(result){
    if(result.search("Win") != -1) {
        console.log(result.search("Win") != -1)
        playerScore++;
    }
    if(result.search("Lose") != -1){
        console.log(result.search("Lose") != -1)
        compScore++;
    }
}
const body = document.querySelector('body');

const buttons = document.querySelectorAll('button');
const div = document.createElement('div');
const scoreTracker = document.createElement('div');
const winner = document.createElement('div');
let playerScore,compScore;
playerScore = compScore = 0;

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        result = playRound(button.id,computerPlay());
        score(result);
        div.textContent = result;
        scoreTracker.textContent = `You currently have ${playerScore} wins,
                                    the computer has ${compScore} wins.`
        if(playerScore == 5 || compScore == 5){
            playerScore == 5 ? winner.textContent = "Congrats, you win!" :
            winner.textContent = "Aw, you lost! Better luck next time!";
        }
    })
});

body.appendChild(div);
body.appendChild(scoreTracker);
body.appendChild(winner);
if(playerScore == 5 || compScore == 5){
    playerScore == 5 ? winner.textContent = "Congrats, you won the match!" :
    winner.textContent = "Aw, you lost! Better luck next time!";
}
/* Writing event listeners separately for each button
const rock = document.querySelector('#Rock');
rock.addEventListener('click', function(){
    const rock_result = document.createElement('div');
    rock_result.textContent = playRound("Rock",computerPlay());
    body.appendChild(rock_result);
})
const paper = document.querySelector('#Paper');
paper.addEventListener('click',function(){
    console.log(playRound("Paper",computerPlay()))
})
const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click',function(){
    console.log(playRound("Scissors",computerPlay()))
})
*/
function game(){
    let playerScore = 0
    let computerScore = 0
    for(i = 0; i < 5; i++){
        playersHand = window.prompt("Rock, Paper, or Scissors?")
        let result = playRound(playersHand,computerPlay())
        console.log(result);
        if(result.search("Tie") != -1){
            i--
        }
        if(result.search("Win") != -1){
            playerScore++
        }
        }
        if(playerScore > 2){
            return(`You Won w/ ${playerScore} wins and ${5 - playerScore}
            losses!`)
        }
        else{
            return(`You lost w/ ${playerScore} wins and ${5 - playerScore} losses!`)
    }
}