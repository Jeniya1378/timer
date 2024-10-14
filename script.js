document.getElementById('startButton').addEventListener('click', function() {
  let minutes = parseInt(document.getElementById('minutes').value);
  if (isNaN(minutes) || minutes <= 0) {
    alert('Please enter a valid number of minutes.');
    return;
  }

  let timeInSeconds = minutes * 60;
  let timerDisplay = document.getElementById('timerDisplay');

  let interval = setInterval(function() {
    let minutesLeft = Math.floor(timeInSeconds / 60);
    let secondsLeft = timeInSeconds % 60;
    
    timerDisplay.textContent = `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;

    timeInSeconds--;

    if (timeInSeconds < 0) {
      clearInterval(interval);
      timerDisplay.textContent = "Time's Up!";
    }
  }, 1000);
});
