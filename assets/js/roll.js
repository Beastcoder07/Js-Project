let resultBox = document.querySelector(".result");
let dice = document.querySelector(".dice");

function roll() {
  const audio = new Audio("assets/audio/dice.mp3");
  let val = Math.floor(Math.random() * 6 + 1);
  audio.play();
  dice.innerHTML = `<img src="assets/img/dice/${val}.svg" alt="dice-img" id="dice-img">
  <div class="rolls">
 <button id="roll" onclick="roll()">
          Roll <i class="fa-solid fa-arrow-right"></i>
        </button>
        <div class="result" >
        <p>${val}</p></div>
  </div>
      
        <button class="exit" onclick="exit()">exit</button>
     
 
     `;
}

function exit() {
  window.location.href = "index.html";
}
