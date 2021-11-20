let input;
const crypto = document.querySelector("#crypto");

function getValue() {
  input = document.querySelector(".input").value;
  console.log(input);
}

function changeToBtc() {
  crypto.innerText = "BTC";
}
function changeToEth() {
  crypto.innerText = "ETH";
}
function changeToSol() {
  crypto.innerText = "SOL";
}
