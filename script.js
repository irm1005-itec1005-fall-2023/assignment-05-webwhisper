/*just testing it*/
/*just testing it*/
/*just testing it*/
// Array of words to choose from
const category1Words = ["dog", "cat", "cow", "bird"];
const category2Words = ["green", "yellow", "orange", "blue"];
let selectedCategory = 0;
let selectedWord = "";


function selectCategory(category) {
  selectedCategory = category;
  if (category == 1) {
     selectedWord = category1Words[Math.floor(Math.random() * category1Words.length)].toUpperCase();
  } else if (category == 2) {
      selectedWord = category2Words[Math.floor(Math.random() * category2Words.length)].toUpperCase();
  }
  createSquares();
}


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

function restartGame() {
  location.reload();
}

document.getElementById('guessButton').addEventListener('click', checkLetter);


window.onload = createSquares;
