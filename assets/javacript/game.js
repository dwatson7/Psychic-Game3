var letters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
 "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var lettersToGuess = null;

window.onload= function() {
  wins = 0;
  document.getElementById('wins').innerHTML= wins;
  console.log(wins);
  losses = 0;
  document.getElementById('losses').innerHTML = losses;
  console.log(losses);

  document.getElementById('guessesLeft').innerHTML = guessesLeft;
  console.log(guessesLeft);

  document.getElementById('soFar').innerHTML = guessedLetters;
}


var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);


//updating the guesses so far to display the letters that have been guessed in the format of [a,d,s,g,h]
var updateguesssedSoFar = function(){
  document.getElementById('soFar').innerHTML = " Your Guesses so far" + guessedLetters.join(',')

};
//




//When a user clicks on a letter the guessesLeft should
    document.onkeyup = function(event) {
      var userGuess = event.key;
      console.log(userGuess);

      guessedLetters.push(" " + userGuess);
      document.getElementById('soFar').innerHTML = guessedLetters;

      if (userGuess === computerGuess){
        wins++;
        document.getElementById('wins').innerHTML = wins;
        guessesLeft = 9;
        document.getElementById('guessesLeft').innerHTML = guessesLeft;
        guessedLetters=[];
        document.getElementById('soFar').innerHTML =guessedLetters;
        computerGuess =letters[Math.floor(Math.random() * letters.length)];
        console.log(computerGuess);

      }

          else if (userGuess !== computerGuess) {
              guessesLeft --;
              document.getElementById('guessesLeft').innerHTML = guessesLeft;



            if (guessesLeft == 0) {
              losses ++;
              document.getElementById('losses').innerHTML =  losses;
              guessesLeft = 9;
              document.getElementById('guessesLeft').innerHTML = guessesLeft;
              guessedLetters=[];
              document.getElementById('soFar').innerHTML =guessedLetters;
              computerGuess =letters[Math.floor(Math.random() * letters.length)];
              console.log(computerGuess);




            }

          }

    }
