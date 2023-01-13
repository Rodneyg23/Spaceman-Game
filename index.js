//Const Variables
const wordOptions = ["LEBRON JAMES", "MICHAEL JORDAN", "TIGER WOODS", "SERENA WILLIAMS", 
"LYDIA KO", "PATRICK MAHOMES", "FLOYD MAYWEATHER", "TOM BRADY", "KEVIN DURANT", "KYRIE IRVING", 
"VENUS WILLIAMS", "LIONEL MESSI", "CRISTIANO RONALDO",];
const word = wordOptions[Math.floor(Math.random() * wordOptions.length)];
const startGame = document.querySelector("#start-game");
const messageBoard = document.querySelector("#message-board");
const clearGame = document.querySelector("#clear-game");
const quitGame = document.querySelector("#quit-game");
const lettersButton = document.querySelectorAll("#letters > button");
const wordSpaces = document.querySelector("#spaceman");
const winLogic = document.querySelector(".win");
const lossCounter = document.querySelector("#counter");
incorrectGuesses = [];

//Button to start game
startGame.addEventListener("click", newRandomWord);
//Button to clear game board
clearGame.addEventListener("click", newRandomWord,);
//letters button responding to clicks
document.querySelector("#letters").addEventListener("click", handleClick);

// Assigned randomWord variable
let randomWord = null;
// Users word to guess
let guessWord;
// represent the empty string.
let correctWord;
// counter for incorrect letter choices
let counter = 0;

//Function used to generate new word a random.
function newRandomWord() {
    randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    console.log("thisIsTheRandomWord =>", randomWord);
    guessWord = "";

    //Creating the input spaces for the letters
    for (let char of randomWord) {
        console.log(char);
        if (char === " ") {
            guessWord = guessWord + char;
        } else {
            guessWord = guessWord + "_";
        }
    }
    renderGuessWord();
}

//display the guess word 
function renderGuessWord() {
    wordSpaces.textContent = guessWord;
    lossCounter.innerHTML = counter;
}

//display users letter guess
function handleClick(e) {
    let letter = e.target.textContent;
    if (randomWord.includes(letter)) {
        let correctWord = "";
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord.charAt(i) === letter) {
                correctWord += letter;
                
            } else {
                correctWord += guessWord.charAt(i);
                incorrectGuesses.push(guessWord);
            } 
        }
        guessWord = correctWord; 
     } else { 
        counter++;
    } 
    renderGuessWord();
    winner();
}

function winner() {
    // Logic for determining if user wins or lose.
    if (guessWord === randomWord) {
        winLogic.innerHTML = ("You Win!!!");
        document.querySelector("#letters").removeEventListener("click", handleClick);
    } else if ( counter === 5) {
        winLogic.innerHTML = ( "You Lose :(");
    document.querySelector("#letters").removeEventListener("click", handleClick);
    }   
}


  
  
  
  











