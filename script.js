const slider = document.getElementById("slider");
const sliderVal = document.getElementById("slider").value;
const showVal = document.getElementById("show-value");
const displayTime = document.getElementById("display-time");
const d = new Date();
	d.setHours(0);
  d.setMinutes(0);

function showRangeVal(that) {
  showVal.innerHTML = that;
  
  // let currentVal = 0;
  // if (d.getSeconds > currentVal) {
  //   currentVal = d.getSeconds;
  // }
  
  d.setSeconds(0);
  d.setSeconds(that*10);
  
  let hour = (d.getHours()<10) ? "0"+d.getHours() : d.getHours();
  let min = (d.getMinutes()<10) ? "0"+d.getMinutes() : d.getMinutes();
  let sec = (d.getSeconds()<10) ? "0"+d.getSeconds() : d.getSeconds();

  displayTime.innerHTML = hour +":"+ min +":"+ sec;
}


 const totalTime = () => {
  displayTime.innerHTML = "";
  
  let hour = (d.getHours()<10) ? "0"+d.getHours() : d.getHours();
  let min = (d.getMinutes()<10) ? "0"+d.getMinutes() : d.getMinutes();
  let sec = (d.getSeconds()<10) ? "0"+d.getSeconds() : d.getSeconds();

  if (sec > 0) {
    displayTime.innerHTML = hour +":"+ min +":"+ sec;
    let secVal = d.getSeconds();
    d.setSeconds(secVal-1);
  } else {
    displayTime.innerHTML = "TIME'S UP!";
    return false;
  }
  
} 

slider.addEventListener("pointerup", function() {
  setInterval(totalTime, 1000);
});

/* const startTimer = (that) => {
  
  displayTime.innerHTML = that;
} */