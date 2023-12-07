//
//  JS File
//  YOU CAN REMOVE ALL OF THIS CODE AND START FRESH
//

//
// Variables
//


// Constants
const appID = "app";
const headingText = "Develop. Preview. Ship.";
const headingTextIcon = "🚀";
const projectDueDate = "8 December 2023 11:59";

const words = ["apple", "banana", "cherry", "durian", "eggplant", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "orange", "pear","raspberry", "strawberry", "tangerine", "watermelon"];

// Variables
let countdownDate = new Date(projectDueDate);

let randomWord = words[Math.floor(Math.random() * words.length)];
let wordLength = randomWord.length;
let guessCount = 0;

//store the word in an array
let guessedWords = [];


// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

function calculateDaysLeft(countdownDate) {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  console.log(countdown);

  const difference = (countdown - now) / 1000;


  // Countdown passed already
  if (difference < 1) {
    return null;
  }


  const days = Math.floor(difference / (60 * 60 * 24));

  return days;
}



// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  const daysLeft = calculateDaysLeft(countdownDate);
  let headingTextCalculated = headingText;

  if (daysLeft > 1) {
    headingTextCalculated = headingTextCalculated.concat(
      " In ",
      daysLeft.toString(),
      " days "
    );
  }else if (daysLeft === 1) {
    headingTextCalculated = headingTextCalculated.concat(
      " Tomorrow"
    );
  }

  h1.textContent = headingTextCalculated.concat(headingTextIcon);
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();



/*just testing it*/
/*just testing it*/
/*just testing it*/
// Array of words to choose from
const words = ["dog", "cat", "cow", "bird"];
let selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Randomly select a word and convert to uppercase

// Function to create squares
function createSquares() {
  const wordContainer = document.getElementById('wordContainer');
  wordContainer.innerHTML = ''; // Clear previous squares

  for (let i = 0; i < selectedWord.length; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.id = 'square' + i;
    wordContainer.appendChild(square);
  }
}

// Function to check if the entered letter is correct
function checkLetter() {
  let input = document.getElementById('guessInput').value.toUpperCase();
  let letterFound = false;

  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === input) {
      document.getElementById('square' + i).textContent = input;
      letterFound = true;
    }
  }

  if (!letterFound && input) {
    alert("Sorry, please try again");
  }

  document.getElementById('guessInput').value = '';
}

// Event listener for the guess button
document.getElementById('guessButton').addEventListener('click', checkLetter);

// Initialize the squares when the window loads
window.onload = createSquares;
