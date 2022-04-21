var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var randomBtn = document.getElementById("random")

function setGradient() {
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")"
	css.textContent = body.style.background
}

function getRandomColour(){
	var values = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"]
	var color = "#"

	for (var i = 0; i < 6; i++) 
	{
		color += values[Math.floor(Math.random() * 16)]
	}
	return color;
}


function setRandom()
{
	color1.value = getRandomColour()
	color2.value = getRandomColour()
	setGradient()
}

color1.addEventListener("input",setGradient)

color2.addEventListener("input", setGradient)
css.textContent = body.style.background

randomBtn.addEventListener("click",setRandom)














// function getRandomColor() {
// 	var letters = '0123456789ABCDEF'
// 	var color = '#'

// 	for (var i = 0; i < 6; i++) 
// 	{
// 		color += letters[Math.floor(Math.random() * 16)]
// 	}
// 	return color;
// }

// function randomColors(){
// 	color1.value = getRandomColor()
// 	color2.value = getRandomColor()

// 	setGradient();
// }
// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

// randomBtn.addEventListener("click", randomColors);