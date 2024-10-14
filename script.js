let interval;
let timeInSeconds;
let isPaused = false;

// Start Button functionality
document.getElementById('startButton').addEventListener('click', function() {
  if (isPaused) {
    // If the timer is paused, just resume it
    isPaused = false;
    startTimer();
  } else {
    // If the timer is not paused, start with a new time
    let minutes = parseInt(document.getElementById('minutes').value);
    if (isNaN(minutes) || minutes <= 0) {
      alert('Please enter a valid number of minutes.');
      return;
    }
    timeInSeconds = minutes * 60;
    startTimer();
  }
});

// Pause Button functionality
document.getElementById('pauseButton').addEventListener('click', function() {
  if (interval) {
    clearInterval(interval);
    isPaused = true;
  }
});

// Reset Button functionality
document.getElementById('resetButton').addEventListener('click', function() {
  clearInterval(interval);
  timeInSeconds = 0;
  document.getElementById('timerDisplay').textContent = '00:00';
  document.getElementById('minutes').value = '';
  isPaused = false;
});

function startTimer() {
  // Clear any existing intervals to prevent multiple timers running
  clearInterval(interval);
  
  interval = setInterval(function() {
    let minutesLeft = Math.floor(timeInSeconds / 60);
    let secondsLeft = timeInSeconds % 60;
    
    document.getElementById('timerDisplay').textContent = `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;

    timeInSeconds--;

    if (timeInSeconds < 0) {
      clearInterval(interval);
      document.getElementById('timerDisplay').textContent = "Time's Up!";
    }
  }, 1000);
}
