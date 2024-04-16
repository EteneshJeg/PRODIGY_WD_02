window.onload = function() {
  let minutes = 0; // Initialize minutes to 0
  let seconds = 0; // Initialize seconds to 0
  let tens = 0; // Initialize tenths of a second to 0
  // Select the element to display
  let appendMinutes = document.querySelector("#minutes");  
  let appendTens = document.querySelector("#tens"); 
  let appendSeconds = document.querySelector("#seconds"); 
// Select the buttons
  let startBtn = document.querySelector("#start"); 
  let stopBtn = document.querySelector("#stop"); 
  let resetBtn = document.querySelector("#reset"); 
  let Interval; // Variable to hold the setInterval reference

  const startTimer = () => {
    tens++; // Increment the tenths of a second

    // Format and display tenths of a second
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    // Update seconds and reset tenths of a second to 0
    if (tens > 90) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    // Format and display seconds
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    // Update minutes and reset seconds to 0
    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  };

  startBtn.onclick = () => {
    clearInterval(Interval); // Clear any existing intervals
    Interval = setInterval(startTimer, 10); // Start the timer by calling startTimer every 10 milliseconds
  };

  stopBtn.onclick = () => {
    clearInterval(Interval); // Stop the timer by clearing the interval
  };

  resetBtn.onclick = () => {
    clearInterval(Interval); // Clear the interval
    tens = "00"; // Reset tenths of a second to '00'
    seconds = "00"; // Reset seconds to '00'
    minutes = "00"; // Reset minutes to '00'
    appendTens.innerHTML = tens; // Display reset tenths of a second
    appendSeconds.innerHTML = seconds; // Display reset seconds
    appendMinutes.innerHTML = minutes; // Display reset minutes
  };
};
