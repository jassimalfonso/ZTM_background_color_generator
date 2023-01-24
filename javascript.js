var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randBtn = document.createElement("button");
randBtn.appendChild(document.createTextNode("Random Color"));
body.appendChild(randBtn);

randBtn.addEventListener("click", getRandomColor);

function randomColor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ')';
  	return color;
}

function getRandomColor() {
	var randomColor1 = randomColor();
	var randomColor2 = randomColor();
	body.style.background = "linear-gradient(to right, "
	+ randomColor1 + ", " 
	+ randomColor2 + ")";
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value + ", "
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient());