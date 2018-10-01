window.addEventListener('load', init);

//Level Permainan
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

//tentukan Levelmu
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// Element yang dipakai
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'show',
  'Ramos Ledorf',
  'PHP',
  'javascript',
  'cout',
  'cin',
  'html',
  'query',
  'fajri',
  'System',
  'print',
  'laravel',
  'javascript',
  'mysql',
  'table',
  'echo',
  'user',
  'password',
  'software',
  'update',
  'from',
  '$_GET',
  '$_POST',
  'connection',
  'if else'
];

// Initialize Game
function init() {
  // menampilkan angka detik pada UI
  seconds.innerHTML = currentLevel;
  // ngeLoad kata dari array words
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  // Check status permainan
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // Jika score adalah -1, tampilkan 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord untuk wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// ambil & tampilkan random kata
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random kata
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // membuat waktu agar berhenti
  if (time > 0) {
    // Decrement pada waktu
    time--;
  } else if (time === 0) {
    // Game over
    isPlaying = false;
  }
  // tampilkan time
  timeDisplay.innerHTML = time;
}

// Check status game 
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}