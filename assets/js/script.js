const options = document.querySelector(".options");
targets = {
  choice1: "toss.html",
  choice2: "roll.html",
  choice3: "random.html",
  choice4: "spin.html",
};

options.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    window.location.href = targets[event.target.id];
  }
});
