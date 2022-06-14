// Code for a CPS test

var nbClick = 0;

function eclick() {
    nbClick += 1;
    console.log ("Click : " + nbClick);
    $("#box_click button") .text ("Click : " + nbClick);
}

  function startTimer(duration) {
    if (window.Worker) {
        var timer = new Worker('../scripts/timer.js');
            timer.postMessage(duration);
            console.log('Message envoyé au worker');
            
            timer.onmessage = function(e) {
                console.log('Message reçu depuis le worker');
                result.textContent = e.data;
              }
      }
  }
function myfunction(){}
var timerID = setTimeout(myfunction, 500);
clearTimeout(timerID);

// import from https://stackoverflow.com/questions/15145726/javascript-game-with-timer
var initialTime = new Date();
function updateTimer() {
    if (new Date() - initialTime > (1000 * 1000 * 60 * 3) ) {
         document.getElementById('clock').innerHTML = formatTime();
         console.log(formatTime())
         setTimeout(updateTimer, 1000);    
    }
}
updateTimer();