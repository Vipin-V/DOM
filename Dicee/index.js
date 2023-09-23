// ! For Dice 1
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + randomDiceImage;

  image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src",imageSource);

// ! For Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var imageSource2 = "images/" + randomDiceImage2;

  image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src",imageSource2);
