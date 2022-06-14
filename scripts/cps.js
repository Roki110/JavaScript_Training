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

