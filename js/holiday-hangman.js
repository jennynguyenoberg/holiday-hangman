const list = [
  "holiday",
  "frost",
  "winter",
  "snowman",
  "santa"
];

let hiddenWord = [];
let usedLetters = [];
let points = 10;

function generateWord() {
  return list[Math.floor(Math.random() * list.length)]; // picks random word from the list above
}

function secretWord() {
  for (let i = 0; i < wordToGuess.length; i++) {
    hiddenWord[i] = " _ "; // transforms the chosen word with underscore
  }
  alert("The word is: " + hiddenWord.join("") + "\n\nHint: Christmas");
}

function userInput() {
  let letter = prompt("Choose a letter: ");
  if (letter === null) { // if user doesn't choose a letter or cancels the function stops and will redirect to startpage
    return null;
  }
  while (letter.length != 1) { // checks if the user enters a single letter only
    letter = prompt("Letters guessed: " + usedLetters + "\n\nChoose a letter:");
  } return letter.toLowerCase();
}

function checkAnswer() {
  if (usedLetters.includes("" + userLetter + "")) { // checks if the user chooses a letter already guessed
    points--; // if uses picks the wrong letter, the user loses a point
  } else {
    usedLetters.push("" + userLetter + ""); 
    for (let i = 0; i < wordToGuess.length; i++) {
      if (userLetter === wordToGuess[i]) {
        hiddenWord[i] = userLetter;
      }
    }
    wordToGuess.includes(userLetter) ? points : points--;
  }
  return alert("The word is: " + hiddenWord.join("") + "\n\nYou still have " + points + " guesses left.");
}

// Startpage

do {
  var choice = prompt("Welcome to my Holiday Hangman Game!\n\nPlease enter 'S' to start the game, and 'Q' to quit.");
  switch (choice) {
    case "S": // Starts the game
    case "s":
      var wordToGuess = generateWord();
      secretWord();
      while (points != 0 && hiddenWord.includes(" _ ")) {
        var userLetter = userInput();
        if (userLetter === null) { // if the user clicked cancel it will go back to last step
          points === 0;
          break;
        }
        checkAnswer();
      }
      if (userLetter === null) {
        alert("Thanks for playing!\n\nHappy Holidays!")
      } else {
        points === 0 ? alert("You lost.\n\nGAME OVER") : alert("Congratulations! The word was: " + hiddenWord.join("") + "\n\nHappy Holidays!"); // if/else statement
      }
      hiddenWord = [] // reserts the variables to start
      usedLetters = []
      points = 10;
      break;
    case "Q": // Cancels the game
    case "q":
    case null: // if the user clicks the cancel button, it will end the game
      alert("Thanks for playing!\n\nHappy Holidays!");
      break;
  }
} while (choice !== "Q" && choice !== "q" && choice !== null);