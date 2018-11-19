let slider = document.getElementById("slider");
// for the range value showing div, not required anymore
//let showVal = document.getElementById("show-value");
let displayTime = document.getElementById("display-time");
let displayHour = document.getElementById("hour");
let displayMin = document.getElementById("min");
let displaySec = document.getElementById("sec");
let displayMillisec = document.getElementById("milli-sec");
let displayTickTock = document.getElementsByClassName("tick-tock");
const d = new Date();
	
let sliderPos;
// takes input from range and dynamically shows in clock
function windClock(that) {
  // for the range value showing div, not required anymore
  //showVal.innerHTML = that;
  sliderPos = that;
  // only need to set second, it will auto increase minutes and hours
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setSeconds(that);
  
  let hour = (d.getHours()<10) ? "0"+d.getHours() : d.getHours();
  let min = (d.getMinutes()<10) ? "0"+d.getMinutes() : d.getMinutes();
  let sec = (d.getSeconds()<10) ? "0"+d.getSeconds() : d.getSeconds();

  displayHour.innerHTML = hour;
  displayMin.innerHTML = min;
  displaySec.innerHTML = sec;
}


// runs after winding is done
function startTimer() {

    displayHour.innerHTML = "";
    displayMin.innerHTML = "";
    displaySec.innerHTML = "";
    
    // add a 0 if value is less than 10
    let hour = (d.getHours()<10) ? "0"+d.getHours() : d.getHours();
    let min = (d.getMinutes()<10) ? "0"+d.getMinutes() : d.getMinutes();
    let sec = (d.getSeconds()<10) ? "0"+d.getSeconds() : d.getSeconds();


    if (slider.value > 0 && (sec > 0 || min > 0 || hour > 0)) {
      displayHour.innerHTML = hour;
      displayMin.innerHTML = min;
      displaySec.innerHTML = sec;
    
      // decremenet seconds by 1
      let secVal = d.getSeconds();
      d.setSeconds(secVal-1);

        slider.value -= 1;
    // decremenet seconds by 1

    } else if (slider.value == 0) {

      console.log(slider.value);
      displayHour.innerHTML = "TI";
      displayMin.innerHTML = "ME";
      displaySec.innerHTML = "UP";
      // stop color animation

      clearInterval(millisecInterval);
      // show 00 instead of 01
      displayMillisec.innerHTML = "00";

      for (let j = 0; j < displayTickTock.length; j++) {
        //displayTickTock[j].style.animation = "";
        displayTickTock[j].style.animation = "TimeUp 1000ms 5 linear 0s";
      }
      return false; // stop execution
    } else {
      displayHour.innerHTML = "00";
      displayMin.innerHTML = "00";
      displaySec.innerHTML = "00";
    }

  

} 


// animation to init every millisecond
let i = 9;
function millisecAnimation() {
    if (i > 0) {
      displayMillisec.innerHTML = "";
      displayMillisec.innerHTML = "0" + i;
      i-=1;
  } else {
    displayMillisec.innerHTML = "00";
    i = 9;
  }
}


// to stop clock when changing slider and then restart again
slider.addEventListener("mousedown", () => {
  onPointerDown();
});
slider.addEventListener("touchstart", () => {
  onPointerDown();
});

// declaring global setInterval variables
  let startTimerInterval; 
  let millisecInterval;
  let tickTockInterval;

  // start clock after mouse/touch is up
slider.addEventListener("mouseup", () => {
  // init startTimer() once, then onPointerUp() takes control
  // if slider has been dragged left, don't init
  if(slider.value>0) {startTimer()};
  onPointerUp();
});
slider.addEventListener("touchend", () => {
  // init startTimer() once, then onPointerUp() takes control
  // if slider has been dragged left, don't init
  if(slider.value>0) {startTimer()};

  onPointerUp();
});


function onPointerUp() {
  
  if (slider.value > 0) {

    // start blinking animation
    for (let j = 0; j < displayTickTock.length; j++) {
    displayTickTock[j].style.animation = "TickTock 1000ms infinite linear 0s";
    }
    startTimerInterval = setInterval(startTimer, 1000);
    // reset millisec iteration
    i = 9;
    millisecInterval = setInterval(millisecAnimation, 100); // init every second
  }
}

function onPointerDown() {
    // reset clock color animation
  clearInterval(startTimerInterval);
  clearInterval(millisecInterval);
  // stop blinking animation
  for (let j = 0; j < displayTickTock.length; j++) {
  displayTickTock[j].style.animation = "";
  }
}

