/*just testing it*/
/*just testing it*/
/*just testing it*/
// Array of words to choose from
const words = ["dog", "cat", "cow", "bird"];
let selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

function triggerConfetti() {
  const confetti = document.getElementById('confetti');
  confetti.style.display = 'block';

  setTimeout(function() {
      confetti.style.display = 'none';
  }, 3000);
}

function createSquares() {
  const wordContainer = document.getElementById('wordContainer'); 
  wordContainer.innerHTML = '';

  for (let i = 0; i < selectedWord.length; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.id = 'square' + i;
    wordContainer.appendChild(square);
  }
}

function checkLetter() {
  let input = document.getElementById('guessInput').value.toUpperCase();
  let letterFound = false;

  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === input) {
      document.getElementById('square' + i).textContent = input;
      letterFound = true;
      triggerConfetti();
    }
  }

  if (letterFound) {
    triggerConfetti();
  } else if (input) {
    alert("Sorry, please try again");
  }

  document.getElementById('guessInput').value = '';
}

document.getElementById('guessButton').addEventListener('click', checkLetter);
window.onload = createSquares;
