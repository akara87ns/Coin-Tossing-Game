var introText = document.getElementById("introText");

var scorePlayer = document.getElementById("playerScore");
var scoreComputer = document.getElementById("computerScore");

var headsImg = document.getElementById("headsImg");
var tailsImg = document.getElementById("tailsImg");

var buttons = document.querySelector(".buttons");
var headsButton = document.getElementById("heads");
var tailsButton = document.getElementById("tails");
var resetButton = document.getElementById("reset");

var guessPlayer = document.getElementById("guessPlayer");
var guessComputer = document.getElementById("guessComputer");
var coinSide;
var scoreCounterPlayer = 0;
var scoreCounterComputer = 0;
var counter = 0;

//Get random number between 0 and 1
function getRandom() {
    var randomNum = Math.round(Math.random());
    return randomNum;
}

buttons.addEventListener("click", function(e) {

//Player's guess
    if (e.target.id === "heads") {
        guessPlayer.textContent = "HEADS";
    } else if (e.target.id === "tails") {
        guessPlayer.textContent = "TAILS";
    } else if (e.target.id === "reset") {
        window.location.reload();
    } else {
        return false;
    }

//Computer's guess
    if (getRandom() === 1) {
        guessComputer.textContent = "HEADS";
    } else {
        guessComputer.textContent = "TAILS";
    }

//Coin side
    if (getRandom() === 1) {
        headsImg.style.display = "inline-block";
        tailsImg.style.display = "none";
        coinSide = "HEADS"
    } else {
        tailsImg.style.display = "inline-block";
        headsImg.style.display = "none";
        coinSide = "TAILS"
    }

//Score
    if (guessPlayer.textContent === coinSide) {
        scoreCounterPlayer++;
        scorePlayer.textContent = scoreCounterPlayer;
    }

    if (guessComputer.textContent === coinSide) {
        scoreCounterComputer++;
        scoreComputer.textContent = scoreCounterComputer;
    }

//Round counter
counter++;

//Game end
    if (counter === 10) {
        headsButton.style.display = "none";
        tailsButton.style.display = "none";
        resetButton.style.display = "block";
        if (scoreCounterPlayer > scoreCounterComputer) {
            introText.innerHTML = "<h2>Congratulations!!!</h2> <p>You won!</p>";
        } else if (scoreCounterPlayer < scoreCounterComputer) {
            introText.innerHTML = "<h2>Sorry :(</h2> <p>You lost. Try again?</p>";
        } else if (scoreCounterPlayer == scoreCounterComputer) {
            introText.innerHTML = "<h2>Tough match.</h2> <p>It's a tie, but you can always try again.</p>";
        }
    }

});