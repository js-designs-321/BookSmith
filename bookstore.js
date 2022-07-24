var index = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {
      index = 1
    }    
  x[index-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}

var countDownDate = new Date("Nov 30, 2020 23:59:59").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("big-deals-timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("big-deals-timer").innerHTML = "EXPIRED";
  }
}, 1000);
