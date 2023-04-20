let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
 return Math.floor(Math.random()*10);
}
function compareGuesses(humanGuess, computerGuess, targetGuess){
  let humanDiff = Math.abs(targetGuess-humanGuess);
  let computerDiff = Math.abs(targetGuess-computerGuess);
  if(humanDiff <= computerDiff){
    return true;
  }else{
    return false;
  }
}
function updateScore(winner){
  if(winner === 'human'){
    humanScore++;
  }else if(winner === 'computer'){
    computerScore++;
  }
}
function advanceRound(){
  currentRoundNumber++;
}





