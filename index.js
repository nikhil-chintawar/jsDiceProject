let randomNumber1 = Math.floor((Math.random() * 6) + 1);

let randomImage1 = "images/dice" + randomNumber1 + ".png";

let image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomImage1);

let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let randomImage2 = "images/dice" + randomNumber2 + ".png";

let image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent= "player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "player 2 wins";

}
else {
    document.querySelector("h1").textContent ="match draw";
}



