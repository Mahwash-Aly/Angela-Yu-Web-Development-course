var randomNumber1 = Math.floor(Math.random()*(7-1)+1);
function player1(){
  var img1 = document.querySelector(".img1");
  if (randomNumber1===1){
    img1.src = "./images/dice1.png"
  } else if (randomNumber1===2){
    img1.src = "./images/dice2.png"
  } else if (randomNumber1===3){
    img1.src = "./images/dice3.png"
  } else if (randomNumber1===4){
    img1.src = "./images/dice4.png"
  } else if (randomNumber1===5){
    img1.src = "./images/dice5.png"
  } else {
    img1.src = "./images/dice6.png"
  }
}
var randomNumber2 = Math.floor(Math.random()*(7-1)+1);
function player2(){
  var img2 = document.querySelector(".img2");
  if (randomNumber2===1){
    img2.src = "./images/dice1.png"
  } else if (randomNumber2===2){
    img2.src = "./images/dice2.png"
  } else if (randomNumber2===3){
    img2.src = "./images/dice3.png"
  } else if (randomNumber2===4){
    img2.src = "./images/dice4.png"
  } else if (randomNumber2===5){
    img2.src = "./images/dice5.png"
  } else {
    img2.src = "./images/dice6.png"
  }
  var heading = document.querySelector("h1");
  if (randomNumber1 > randomNumber2){
    heading.innerText = "Player 1 won."
  } else if (randomNumber1 < randomNumber2){
    heading.innerText = "Player 2 won."
  } else if (randomNumber1 === randomNumber2){
    heading.innerText = "It was a DRAW!"
  }
}
