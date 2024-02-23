// const generateRanNum = Math.random() // generating a random num
// const generateRanNum = parseInt(Math.random()) // to get a integer num
// const generateRanNum = parseInt(Math.random() * 100) // to get a numeber between 100
let generateRanNum = parseInt(Math.random() * 100 + 1); // to avoid getting 0
console.log(generateRanNum);
const submit = document.querySelector('#subt');
const usrInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingTime = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultPara');

const para = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(usrInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please insert a valid number');
  } else if (guess < 1) {
    alert('Your number is lower than 1');
  } else if (guess > 100) {
    alert('your number is grater than 100');
  } else {
    prevGuess.push(guess);
    if (numOfGuess === 11) {
      cleanGuess(guess);
      displayMessage(`Game Over. Random Num: ${generateRanNum}`);
      endGame();
    } else {
      cleanGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === generateRanNum) {
    displayMessage('You Guessed Right');
    endGame();
  } else if (guess < generateRanNum) {
    displayMessage('Your guess is TOO low');
  } else if (guess > generateRanNum) {
    displayMessage('Your guess is TOO high');
  }
}

function cleanGuess(guess) {
  usrInput.value = '';
  guessSlot.innerHTML += `${guess};  `;
  numOfGuess++;
  remainingTime.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2> ${message} </h2>`;
}

function endGame() {
  usrInput.value = '';
  usrInput.setAttribute('disabled', '');
  para.classList.add('button');
  para.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (){
    generateRanNum = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numOfGuess = 1
    guessSlot.innerHTML = ''
    remainingTime.innerHTML = `${11 - numOfGuess}`
    usrInput.removeAttribute('disabled')
    startOver.removeChild(para)
    lowOrHigh.innerHTML = ''

    playGame = true
  })
}