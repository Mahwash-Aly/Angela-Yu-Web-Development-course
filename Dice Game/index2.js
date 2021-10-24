var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice = "dice"+randomNumber1 +".png";
var randomSource = "images/"+randomDice;

var img = document.querySelectorAll("img")[0];
var image1 = img.setAttribute("src", randomSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomSource2 = "images/dice"+randomNumber2+".png";
var img = document.querySelectorAll("img")[1];
var image2 = img.setAttribute("src", randomSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerText = "Player 1 won. 🎉"
} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerText = "Player 2 won. 🎉"
} else{
  document.querySelector("h1").innerText = "It was a draw!"
}
