let interval;
let timeInSeconds;
let isPaused = false;

// Timer functionality
document.getElementById('startButton').addEventListener('click', function() {
  if (isPaused) {
    isPaused = false;
    startTimer();
  } else {
    let minutes = parseInt(document.getElementById('minutes').value);
    if (isNaN(minutes) || minutes <= 0) {
      alert('Please enter a valid number of minutes.');
      return;
    }
    timeInSeconds = minutes * 60;
    startTimer();
  }
});

document.getElementById('pauseButton').addEventListener('click', function() {
  if (interval) {
    clearInterval(interval);
    isPaused = true;
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  clearInterval(interval);
  timeInSeconds = 0;
  document.getElementById('timerDisplay').textContent = '00:00';
  document.getElementById('minutes').value = '';
  isPaused = false;
});

function startTimer() {
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

// To-Do List functionality
document.getElementById('addButton').addEventListener('click', function() {
  let task = document.getElementById('todoInput').value;
  if (task) {
    let listItem = document.createElement('li');

    // Create checkbox for task completion
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        listItem.classList.add('completed');
      } else {
        listItem.classList.remove('completed');
      }
    });

    // Append the checkbox and the task text
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(task));
    document.getElementById('todoList').appendChild(listItem);

    // Clear the input field after adding
    document.getElementById('todoInput').value = '';
  } else {
    alert('Please enter a task.');
  }
});
