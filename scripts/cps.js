// Code for a CPS test

var nbClick = 0;
var state = 0;
var duration = 10;
var chrono;
var startTime = 0;
var chronoInterval;

function onInit () {
  nbClick = 0;
  state = 0;
  $("#box_click").text ("Click here to begin");
  $("#time").removeClass("item");
  $("#time").text("");
  clearTimeout(chrono);
  clearInterval(chronoInterval);
}


function onInterval() {
  var countdown;
  countdown = duration - (Date.now() - startTime) / 1000;
  countdown = ((countdown * 100) | 0) / 100;
  $("#time").text(countdown + " second" + ((countdown>1)?"s":"") + " remaining");
}

function onStressClick () {
  if (state == 0) {
    state = 1;
    chrono = setTimeout(onStressEnd, duration * 1000);
    startTime= Date.now();
    chronoInterval = setInterval(onInterval, 87);
    $("#time").addClass("item");
    $("#box_click").text("Click : " + nbClick);
  }
  else if (state == 1) {
    nbClick++;
    console.log ("Click" + ((nbClick>1)?"s":"") +  ": " + nbClick);
    $("#box_click").text("Click" + ((nbClick>1)?"s":"") +  ": " + nbClick);
  }
}

function onStressEnd () {
  state = 2;
  $("#box_click").text("Your CPS is : " + nbClick / duration);
  clearInterval(chronoInterval);
  $("#time").text("Finished !!!");
}
