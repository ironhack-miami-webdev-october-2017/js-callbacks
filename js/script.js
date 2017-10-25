console.log('program STARTED!');

var yesButton = document.querySelector('.yes-button');
var currentTimer;

// anonymous functions for events are ALSO callbacks
yesButton.onclick = function () {
    // "setTimeout()" returns the timer ID (for canceling the timer)
    currentTimer =
      // setTimeout(CALLBACK, MILLISECONDS)
      setTimeout(
        // this anonymous function is our callback
        function () {
            // create a <p> tag
            var myP = document.createElement('p');
            myP.innerHTML = '5 seconds have passed!';

            // append it to the container
            var container = document.querySelector('.container');
            container.appendChild(myP);
        },
        5000
      );
}; // end onclick



var stopButton = document.querySelector('.stop-button');

stopButton.onclick = function () {
    clearTimeout(currentTimer);

    var myP = document.createElement('p');
    myP.innerHTML = 'Stopped timer ' + currentTimer;

    // append it to the container
    var container = document.querySelector('.container');
    container.appendChild(myP);
}; // end onclick




// Countdown code --------------------------------------------------------------
// -----------------------------------------------------------------------------

var countdownBtn = document.querySelector('.countdown-button');
var intervalId;

countdownBtn.onclick = function () {
    // if there was a timer already started, stop it before making the new one.
    if (intervalId) {
        clearInterval(intervalId);
    }

    var countdownInput = document.querySelector('input');
    // "value" only works on input tags
    var countdownNumber = countdownNumber.value;

    var countFeedback = document.querySelector('.count');
    // update DOM with initial count
    countFeedback.innerHTML = countdownNumber;

    // "setInterval()" returns the interval ID (for canceling the interval)
    intervalId =
      // setInterval(CALLBACK, MILLISECONDS)
      //   - calls the function over and over every time the amount of time passes
      setInterval(
        // this anonymous function is our callback
        function () {
            // decrease the count
            countdownNumber -= 1;
            // update DOM with updated count
            countFeedback.innerHTML = countdownNumber;

            // stop the "setInterval()" loop when the counter reaches 0
            if (countdownNumber === 0) {
                clearInterval(intervalId);
            }
        },
        1000
      );
};


var countStopBtn = document.querySelector('.count-stop');

countStopBtn.onclick = function () {
    // stop the "setInterval()" loop
    clearInterval(intervalId);
};
