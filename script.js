var s = 0;
var m = 0;
var h = 0;
var d = new Date();

setInterval(function () {
  d = new Date();
  s = d.getSeconds() * 6;
  m = d.getMinutes() * 6;
  h = d.getHours() * 30 + Math.round(m / 12);

  document.getElementById("sec").style.transform = "rotate(" + s + "deg)";
  document.getElementById("min").style.transform = "rotate(" + m + "deg)";
  document.getElementById("hr").style.transform = "rotate(" + h + "deg)";
}, 1000);
