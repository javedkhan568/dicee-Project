var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomdice = "dice" +  randomNumber1  + ".png"; 

var randomimagesource = "images/" +  randomdice;

var image1 = document.querySelectorAll ("img")[0];

image1.setAttribute("src" , randomimagesource);


var randomNumber2 = Math.floor(Math.random()*6)+1 ; 
var randomimagesource2 = "images/dice" + randomNumber2 + ".png" ; 
document.querySelectorAll("img")[1].setAttribute ("src" , randomimagesource2); 


// if player 1 wins 
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "player 1 wins!";

} else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "player 2 wins!";
}
else {
document.querySelector("h1").innerHTML = "Draw!";  
}










