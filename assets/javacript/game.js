var letters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
 "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var lettersToGuess = null;


var userGuess = letters[Math.floor(Math.random() * letters.length)];

var updateguessesLeft = function () {

  document.getElementById('#guessleft').innerHtml = "Guesses Left " + guessesLeft;


var updatenextLetter = function(){

  this.lettersToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];

};
//updating the guesses so far to display the letters that have been guessed in the format of [a,d,s,g,h]
var updateguesssedSoFar = function(){
  document.getElementById('#sofar').innerHtml = " Your Guesses so far" + guessedLetters.join(',')

};
//
  var reset = function(){
    guesses = 9;
    guessesLeft = 9;
    guessedLetters =[];

    updateguesssedSoFar();
    updatenextLetter();
    updateguessesLeft();
  }

    updateguessesLeft();
    updatenextLetter();
//When a user clicks on a letter the guessesLeft should 
    document.onkeyup = function() {
      guessesLeft --;
      var userGuess = string.letters(event.keyCode).toLowerCase();

      guessedLetters.push(userGuess);
      updateguessesLeft();
      updateguesssedSoFar();


          if (guessesLeft > 0) {
              if (userGuess === lettersToGuess) {
                  wins++;
                  document.getElementById('#wins').innerHtml = "Wins: " + wins;
                  reset();

              }

            }else if (guessesLeft == 0) {
              losses ++;
              document.getElementById('#losses').innerHtml = "Losses " + losses;
              reset();

            }

          }
    }
})
