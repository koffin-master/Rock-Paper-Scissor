let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
   const randInd =  Math.floor(Math.random() * 3);
    return options[Math.floor(randInd)];
}

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game draw";
    msg.style.backgroundColor = "#0e1428";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if (userWin) {
        console.log("You win");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore
    }else{
        console.log("You loose");
        msg.innerText = `You loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) =>{
console.log("user choice = ", userChoice);
const compChoice = genCompChoice();
console.log("computer choice = ", compChoice);

if (userChoice === compChoice) {
    drawGame();
}else{
    let userWin = true;
    if (userChoice === "rock") {
        //scissors , paper
        userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper") {
        //rock , scissors
        userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock , paper
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
}
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})