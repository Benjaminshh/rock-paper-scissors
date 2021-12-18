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