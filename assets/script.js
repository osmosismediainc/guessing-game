//define letters
var alphabet = ["a", 
				"b", 
				"c", 
				"d", 
				"e", 
				"f", 
				"g", 
				"h", 
				"i", 
				"j", 
				"k", 
				"l", 
				"m", 
				"n", 
				"o", 
				"p", 
				"q", 
				"r", 
				"s", 
				"t", 
				"u", 
                "v",
                "w", 
				"x", 
				"y", 
                "z"];
// define scoring
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var psychicLetter;
// generate a random letter using a random number generated as one to twenty-six (length of the alphabet's characters) and define it as the "psychic letter"
var newLetter = function() {
	psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};
newLetter();
// Add letter guessed to the list in the html element "guesses"
var soFar = function() {
    document.getElementById("guesses").innerHTML = guessesSoFar.join(",");
};
// Track Guesses left
var guessesLeft = function() {
    document.getElementById("left").innerHTML = left;
};
// Reset for new game
var newGame = function() {
	guessesSoFar = [];
    left = 9;
    newLetter();
    guessesLeft();
    soFar();
}
// When the key is presses
document.onkeyup = function(event) {
	// LETS SEE SOME CONSOLE STUFF
	console.log("Psychic Letter: " + psychicLetter);
	var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {
        if (userGuess == psychicLetter) {
			alert("You Win!")
        	wins++;
        	document.getElementById("wins").innerHTML = wins;
            newGame();
        }
    } else if (left == 0) {
		alert("You Loose! Sorry! Go Home")
    	losses++;
    	document.getElementById("losses").innerHTML = losses;
        newGame();
    }
};