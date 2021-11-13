let randomNumber1 = Math.floor(Math.random()*6)+1;
var image1 = document.querySelector(".img1");
let path1 = "images/dice"+randomNumber1+".png";
image1.setAttribute("src", path1);

let randomNumber2 = Math.floor(Math.random()*6)+1;
var image2 = document.querySelector(".img2");
let path2 = "images/dice"+randomNumber2+".png"
image2.setAttribute("src", path2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player1 has won! 🚩"
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText = "Player2 has won! 🚩"
} else {
    document.querySelector("h1").innerText = "It was a draw!"
}