//Setting variables and zeroing counters (`var attempts` set to 9 yeilds 10 total attempts as numbering begins with zero)
var wins = 0;
var losses = 0;
var tries = 0;
var usedLettersArray = [];
var letters = "abcdefghijklmnopqrstuvwxyz";

//GENERATING THE COMPUTERS SECRET LETTER
// Creates randomLetter variable by generating a random number from 0 - 26 (length of letters array) and retun the coresponding letter in that index position Found on: https://css-tricks.com/snippets/javascript/select-random-item-array/
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log("Random Letter = " + randomLetter);

//CAPTURING THE PLAYERS INPUT
//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
    var playerGuess = event.key.toLowerCase();
    console.log("Player Guess: " + playerGuess);
}
// HANDLING CORRECT GUESSES
//test if players guess equals randomLetter, if true it increments wins by 1, and clears used letters array. Supposed to reset guess # to 10 but starts at 9 instead, 
if (playerGuess === randomLetter) {
    wins++;
    tries = 10;
    usedLettersArray = [];
}
//HANDLING INCORRECT GUESSES
if (playerGuess !== ranLetter) {
    attempts--;
}

//when remaining attempts equals zero, losses is incrimented by 1; tries is reset to 10, and used letters array is cleared
if (attempts === 0) {
    losses++;
    tries = 10;
    usedLetterArray = []


}

//HANDLING INCORRECT GUESSES - OUTPUT
//this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
if (usedArray.indexOf(playerGuess) >= 0) {

} else {
    usedArray.push(playerGuess);
    document.getElementById('playerGuess').innerHTML = usedArray;
    console.log(usedArray);
}
//OUTPUT TO HTML
//these statements write the values/scores generated to the HTML
document.getElementById('wins').innerHTML = won;
document.getElementById('losses').innerHTML = lost;
document.getElementById('guesses').innerHTML = attempts;