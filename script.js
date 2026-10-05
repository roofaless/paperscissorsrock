 console.log("Lets play Paper, Scissors, Rock");


/*Input - User provides string paper, scissors or rock
Computer - Randomly picks paper, scissors or rock

Game logic
if input & comp are the same, draw
if paper & rock, paper wins
if rock & scissors, rock wins
if scissors & paper, scissors wins

Output - Display the result of the game (win, lose, draw)

Can play in the console by calling a function with the user's choice as an argument.*/

/*function play(userChoice) {
    const choices = ["paper", "scissors", "rock"];
    const compDecide = Math.floor(Math.random() * choices.length);
    const compChoice = choices[compDecide];

    if(userChoice === compChoice) {
        console.log("It's a draw!");
    }else if(userChoice === "paper" && compChoice === "rock") {
        console.log("User wins!");
    }else if(userChoice === "rock" && compChoice === "scissors") {
        console.log("User wins!");
    }else if(userChoice === "scissors" && compChoice === "paper") {
        console.log("User wins!");
    }else if(userChoice === "rock" && compChoice === "paper") {
        console.log("Comp wins!");
    }else if(userChoice === "scissors" && compChoice === "rock") {
        console.log("Comp wins!");
    }else if(userChoice === "paper" && compChoice === "scissors") {
        console.log("Comp wins!");
    }

    console.log( userChoice + " beats " + compChoice)
}
*/
let playerScore = 0;
let compScore = 0;

function getCompChoice(){
    const choices = ["paper", "scissors", "rock"];
    const compDecide = Math.floor(Math.random() * choices.length);
    const compChoice = choices[compDecide];
    return compChoice;
}

function playRound(humanChoice) {

 const compChoice = getCompChoice();
 const humanChoiceLower = String(humanChoice).toLowerCase().trim();

    if(humanChoiceLower === "paper" && compChoice === "rock" || humanChoiceLower === "rock" && compChoice === "scissors"  || humanChoiceLower === "scissors" && compChoice === "paper") {
        console.log("User wins! " + humanChoice + " beats " + compChoice);
        playerScore++;
    }else if(humanChoiceLower === "rock" && compChoice === "paper" || humanChoiceLower === "scissors" && compChoice === "rock" || humanChoiceLower === "paper" && compChoice === "scissors") {
        console.log("Comp wins! " + compChoice + " beats " + humanChoice);
        compScore++;
    }else if(humanChoiceLower === compChoice) {
        console.log("It's a draw! " + humanChoice + " and " + compChoice);
    }    

    console.log("User score: " + playerScore + " Comp score: " + compScore);
}

function playGame(humanChoice) {

    playRound(humanChoice);
    playerScore = playerScore;
    compScore = compScore;

    if(playerScore === 5) {
        console.log("User wins the game!");
        playerScore = 0;
        compScore = 0;
    }else if(compScore === 5) {
        console.log("Comp wins the game!");
        playerScore = 0;
        compScore = 0;
    }
  
}