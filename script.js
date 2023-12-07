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
