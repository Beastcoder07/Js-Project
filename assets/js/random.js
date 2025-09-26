let number = document.getElementById("number");
function generateNumber() {
  let keyWords = "123456789";
  let num = "";
  let loop = 1;
  let limit = Math.floor(Math.random() * 2) + 1;
  while (loop <= limit) {
    num += keyWords[Math.floor(Math.random() * keyWords.length)];
    loop++;
  }
  console.log(num);
  number.innerHTML = num;
}
function exit() {
  window.location.href = "index.html";
}
