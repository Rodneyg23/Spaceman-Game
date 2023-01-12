//Const Variables
// const wordOptions = ["LEBRON JAMES", "MICHAEL JORDAN", "TIGER WOODS", "SERENA WILLIAMS", "LYDIA KO", "PATRICK MAHOMES"]
const wordOptions = ["CAT", "DOG"]
const word = wordOptions[Math.floor(Math.random() * wordOptions.length)]
const startGame = document.querySelector("#start-game")
const messageBoard = document.querySelector("#message-board")
const resetGame = document.querySelector("#reset-game")
const quitGame = document.querySelector("#quit-game")
const lettersButton = document.querySelectorAll("#letters > button")
const wordSpaces = document.querySelector("#spaceman")
const winLogic = document.querySelector(".win")
const lossCounter = document.querySelector("#counter")
incorrectGuesses = []

//Button to start game
startGame.addEventListener("click", newRandomWord)
//Button to reset current game
resetGame.addEventListener("click", newRandomWord)

// Assigned randomWord variable
let randomWord = null
// Users word to guess
let guessWord 
let correctWord
let counter = 0 

//Function used to generate new word a random.
function newRandomWord() {
    randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    console.log("thisIsTheRandomWord =>", randomWord)
    guessWord = ""
    
    //Creating the input spaces for the letters
    for (let char of randomWord) {
        console.log(char)
        if(char === " ") {
            guessWord = guessWord + char 
        } else {
            guessWord = guessWord + "_"
    }
} 

renderGuessWord()
}

//display the guess word 
function renderGuessWord() {
   wordSpaces.textContent = guessWord
  lossCounter.innerHTML = counter


}


//letters button responding to clicks
document.querySelector("#letters").addEventListener("click", handleClick)

//display users letter guess
function handleClick(e) {
    let letter = e.target.textContent;
     if (randomWord.includes(letter)) {
        let correctWord = ""
        

        //for statment to play letter at the specified index of the guess word.
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord.charAt(i) === letter) {
                correctWord += letter
                
                
                
              //Win Logic
            //   winLogic.innerHTML = ("You Win!!!") 

            } else { 
                correctWord += guessWord.charAt(i)
                incorrectGuesses.push(guessWord)
                counter++
                console.log(counter, "counter")
            
            //     // winLogic.innerHTML = ("You Lose")
            // }   
            // if (incorrectGuesses.length === 5) {
                // winLogic.innerHTML = ("You Lose")
            }
            }
            guessWord = correctWord;
                
        }

 renderGuessWord()
 winner()
    }

function winner() {
    // if correct = random word then you win
    if (guessWord  === randomWord) {
        console.log("the winner")
    winLogic.innerHTML = ("You Win!!!") 
     } else if (
        counter === 5) {
        winLogic.innerHTML = ("You Lose")
        console.log("You Loss") 
        } else {
            
            

        }
        // I want 5 incorrect guess to equal 5
        
        
        }
        
       
       
        
     
    



