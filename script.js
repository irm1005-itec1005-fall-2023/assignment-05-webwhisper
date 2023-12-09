/*just testing it*/
/*just testing it*/
/*just testing it*/
// Array of words to choose from
const category1Words = ["dog", "cat", "cow", "bird", "horse", "pig", "goat", "chicken","bear"];
const category2Words = ["green", "yellow", "orange", "blue", "red", "pink", "purple", "black", "white", "brown"];
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

document.getElementById('guessButton').addEventListener('click', checkLetter);

function restartGame() {
  const audio = document.getElementById('background-music');
  audio.onpause(); //pause the audio before reloading
  location.reload();
}
function playmusic() {
  const audio = document.getElementById('background-music');
  audio.addEventListener('canplaythrough', function () {
    audio.loop = true;
    audio.play();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  playMusic();
  createSquares ();
});



window.onload = createSquares;
