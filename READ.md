Game: Spaceman

Version 1
As a user I would like to select between 1 player or multiplayer
As a user I would like to play against an opponent
As a user I would like to select any letter from the alphabet
As a user I would like like blanks spaces to input letters
As a user I would like to know when I have selected the correct letter
As a user I would like to know when I selected the incorrect letter
As a user I would like to know when I have won the game
As a user I would like to know when I have loss the game.

Version 2
As a user I would like to play agains the computer
As a user I would like to have a timer to select a letter
As a user I would like a hint box for the word that I am guessing

Version 3
As a user I would like to share my games on social media
As a user I would like to invite people on my social media to play against.
As a user I would like to have a scoring system based on each game
As a user I would to see a leaderboard with the top scores in ranking order from recent games.



Pseudocode

function {
    if user selects 1 player then the user will be the only player selecting letters
}

else {
    if user selects multiplayer then both users will alternate selecting letters
}

function myFunction() {
  document.getElementById("myLetters").click();
}

function {
    If correect letter is selected then letter will appear in input space
} 
else {
    if incorrect letter is selected then display 'Incorrect' across the screen
}

function {
    When user gets all of the correct letters and wins game, then diplsay 'YOU WIN!!!' across the screen
} 
else {
    When user does not get the correct letters and loses game, then display 'HOUSTON WE HAVE A PROBLEM...' display across the screen
}