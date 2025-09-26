const Map = {
  Heads: "0.jpeg",
  Tails: "1.jpeg",
};
function tossCoin() {
  const audio = new Audio("assets/audio/coin-flip.mp3");
  const Result = document.querySelector(".result");
  Result.style.display = "block";
  audio.play();
  // Randomly select Heads or Tails
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  // Display the result in the coinResult div
  document.getElementById(
    "coinResult"
  ).innerHTML = `   <img src="assets/img/coin/${Map[result]}" id="coin-img" />`;
  Result.innerHTML = `<p>${result}</p>`;
}
function exit() {
  window.location.href = "index.html";
}
