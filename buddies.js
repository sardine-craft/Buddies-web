// Set the date we're counting down to
var countDownDate = new Date("Aug 31, 2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Releasing...";
    document.getElementById("cs1").style.display = "none";
    document.getElementById("countdown").style.display = "none";
  }
}, 1000);

function Home() {
    document.getElementById("title").innerHTML = "Home.";

}

function rules() {
    document.getElementById("title").innerHTML = "The Rules.";

}

function member() {
    document.getElementById("title").innerHTML = "The Club!";

}

function hide() {
    document.getElementByClassName("group").style.display = "none";
}


function startup() {
    var str = window.location.href;
    alert("The URL of this page is: " + str);
    if (str.includes("home")) {
    alert("You have been granted acces, Ian.");
    document.getElementById("cs1").style.display = "none";
    document.getElementById("countdown").style.display = "none";
    }
}

window.onload = startup();

window.onload = alert("Hello mr.President!");
