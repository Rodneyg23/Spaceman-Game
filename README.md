# Spaceman-Game

<img width="1394" alt="Screen Shot 2023-01-13 at 7 25 20 AM" src="https://user-images.githubusercontent.com/120343857/212581205-7f787152-d1dc-41e6-a3c8-aa0e79b0a891.png">

Play Spaceman Here: https://rodneyg23.github.io/Spaceman-Game/

Description
```
Spaceman is a game where you will have an limited amount of tries to guess the letter to a a mystery word.
Once you guess the correct word, you win the game.
```
How To Play
```
-Select "Start Game" and begin to choose from the letter bank to see you if you can guess the mystery word.
-If you can guess the mystery word then, you win!
-You will be allowed 5 incorrect letter guesses and after that, you lose the game.
-After you either win or lose, you will simply select "Clear Game" to clear the board and then select "Start Game again to being a new game!

Good Luck
```
Technologies Used:
```
HTML
CSS
Javascript
```



1. HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./style.css" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./index.js" defer></script>
    <title>Spaceman</title>
</head>
<body>
    <h1>Spaceman</h1>
        <h2>Famous Athletes Edition</h2> <br>
             <h1 class="win"></h1>

    <h3 class="result"></h3>
        <div
            id="game-board">
        <button id="start-game"type="button">Start Game</button>
             </div> <br>
        <div>
            <button id="reset-game"type="button">Reset Game</button> <br> <br>
                </div>
     
     

     <p>To become a real astronaut you have to first unlock the correct word 
        to travel into space!</p>
    

     <section id="letters">
     <button type="button">A</button>
     <button type="button">B</button>
     <button type="button">C</button>
     <button type="button">D</button>
     <button type="button">E</button>
     <button type="button">F</button>
     <button type="button">G</button>
     <button type="button">H</button>
     <button type="button">I</button>
     <button type="button">J</button>
     <button type="button">K</button>
     <button type="button">L</button>
     <button type="button">M</button>
     <button type="button">N</button>
     <button type="button">O</button>
     <button type="button">P</button>
     <button type="button">Q</button>
     <button type="button">R</button>
     <button type="button">S</button>
     <button type="button">T</button>
     <button type="button">U</button>
     <button type="button">V</button>
     <button type="button">W</button>
     <button type="button">X</button>
     <button type="button">Y</button>
     <button type="button">Z</button>
</section>
     <div id="message-board"></div>

        <div id="guess counter">0</div>
     
            <div id="spaceman">This is the spaceman</div>

                <div class="lettersContainer"></div>


                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z"/></svg>


</body>
</html>
```

2. Javascript
```
//Const Variables
const wordOptions = ["LEBRON JAMES", "MICHAEL JORDAN", "TIGER WOODS", "SERENA WILLIAMS", "LYDIA KO", "PATRICK MAHOMES"];
const word = wordOptions[Math.floor(Math.random() * wordOptions.length)];
const startGame = document.querySelector("#start-game")
const messageBoard = document.querySelector("#message-board")
const resetGame = document.querySelector("#reset-game")
const quitGame = document.querySelector("#quit-game")
const lettersButton = document.querySelectorAll("#letters > button")
const storeGuesses = document.querySelector("#spaceman")
const numberOfGuesses = 0

//Button to start game
startGame.addEventListener("click", newRandomWord)
//Button to reset current game
resetGame.addEventListener("click", newRandomWord)


// Assigned randomWord variable
let randomWord = null
// Users word to guess
let guessWord 




//Function used to generate new word a random.
function newRandomWord() {
    randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    console.log("thisIsTheRandomWord =>", randomWord)
    guessWord = ""
//Creating the input spaces for the letters
    for (let char of randomWord) {
        console.log(char)
        if(char === " ") {
            guessWord = guessWord + char; 
        } else {
            guessWord = guessWord + "_";
    }
} 


renderguessWord()
}


//display the guess word 
function renderguessWord() {
   storeGuesses.textContent = guessWord 
console.log(guessWord, "This is the guess word")
}
newRandomWord()

//letters button responding to clicks
document.querySelector("#letters").addEventListener("click", handleClick)

//display users letter guess
function handleClick(e) {
    let letter = e.target.textContent;
     if (randomWord.includes(letter)) {
        let correctWord = ""

     //for loop to play letter at the specified index of the guess word.
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord.charAt(i) === letter) {
                correctWord += letter 
            } else { 
                correctWord += guessWord.charAt(i)
            }   
            }
            guessWord = correctWord;
                
        }


 renderguessWord()
    }
```

3. CSS
```
body {
    background-color: skyblue
}

h1 {
    text-align: center;

}

h2 {
    text-align: center;
}

p{
    text-align: center;
}

section {
    text-align: center;
    font-size: 50px;
    margin: 0 auto;
}

div {
    text-align: center;
    
}

svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
  }
  ```


    


## User Story:

### MVP:

Version 1

-As a user I would like to select any letter from the alphabet
```
function myFunction() {

document.getElementById("myLetters").click();

}
```
-As a user I would like like blanks spaces to input letters

-As a user I would like to know when I have selected the correct letter
```
function {
    
    If correect letter is selected then letter will appear in input space
```

-As a user I would like to know when I have won or lost the game
```
status() = 
    if (match == "win"){
        
        return "YOU WIN!!!"
   
   }   else { 
        
        return "HOUSTON WE HAVE A PROBLEM"
    }
```

Version 2
-As a user if incorrect letter is selected then display 'Incorrect' across the screen

-As a user I would like to know when I selected the incorrect letter

-As a user I would like to select between 1 player

-As a user I would like to play against an opponent

-As a user I would like to play agains the computer

-As a user I would like to have a timer to select a letter

-As a user I would like a hint box for the word that I am guessing

Version 3

-As a user I would like to share my games on social media

-As a user I would like to invite people on my social media to play against.

-As a user I would like to have a scoring system based on each game

-As a user I would to see a leaderboard with the top scores in ranking order from recent games.
