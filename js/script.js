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
};
