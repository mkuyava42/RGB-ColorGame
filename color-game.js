const numSquare = 6;
let colors = generateRandomColors(numSquare);
let pickedColor = pickColor();
const square = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.getElementById("messageDisplay");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function () {
  easy();
});

hardBtn.addEventListener("click", function () {
  hard();
});

resetButton.addEventListener("click", function () {
  reset();
});

for (let i = 0; i < square.length; i++) {
  // aad initial colors to squares
  square[i].style.backgroundColor = colors[i];
  // add click listener to squares
  square[i].addEventListener("click", function () {
    // grab the color of clicked square
    let clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      resetButton.textContent = "Play Again ?";
      messageDisplay.textContent = "Correct !";
      colorChange(clickedColor);
      h1.style.background = pickedColor;
      messageDisplay.style.color = pickedColor;
    } else {
      this.style.backgroundColor = "#ffffff";
      messageDisplay.textContent = "Try again";
    }
  });
}

// ************************** function definitions *******************

function colorChange(color) {
  // loop thogh all squares
  for (let i = 0; i < square.length; i++) {
    // change all color to the match color
    square[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  let arr = [];
  //repeat num times
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  // picking the random color for red
  let r = Math.floor(Math.random() * 256);
  // picking the random color for green
  let g = Math.floor(Math.random() * 256);
  // picking the random color for blue
  let b = Math.floor(Math.random() * 256);

  // return the random colors
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  messageDisplay.style.color = "black";
  h1.style.background = "#38385d";
  // generate new colors for the squares
  colors = generateRandomColors(numSquare);
  // pickig the new random color
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change the square color
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
}

function easy() {
  reset();
  messageDisplay.textContent = "";
  messageDisplay.style.color = "black";
  h1.style.background = "#38385d";
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquare = 3;
  colors = generateRandomColors(numSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < square.length; i++) {
    if (square[i]) {
      square[i].style.backgroundColor = colors[i];
    }
    square[3].style.display = "none";
    square[4].style.display = "none";
    square[5].style.display = "none";
  }
}

function hard() {
  reset();
  messageDisplay.textContent = "";
  messageDisplay.style.color = "black";
  h1.style.background = "#38385d";
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquare = 6;
  colors = generateRandomColors(numSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].style.display = "block";
  }
}
