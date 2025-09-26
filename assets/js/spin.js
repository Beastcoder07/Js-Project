confirm("WORK IN PROGRESS,still spin?");
const chart = document.getElementById("myPieChart");
let degree = Math.ceil(Math.random() * 3600);
function spin() {
  chart.style.transform = "rotate(" + degree + "deg)";
  degree += Math.ceil(Math.random() * 3600);
}
function exit() {
  window.location.href = "index.html";
}
