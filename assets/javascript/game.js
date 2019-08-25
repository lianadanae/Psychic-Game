//Array of computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Event function for user pressing a key
document.onkeyup = function (event) {
    var userGuess = event.key;


    //If the user guesses correctly

    if (userGuess === computerGuess) {
        wins++;
        guesses = 9;
        guessedLetters = [];
    }

    //If the user doesn't guess correctly
    if (userGuess != computerGuess) {
        guesses--;
        guessedLetters.push(userGuess);
    }

    if (guesses === 0) {

        guesses = 9;
        losses++;
        guessChoices = [];

    }
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesleft').innerHTML = guessesleft;

}