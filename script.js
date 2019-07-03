var _ = require('locdash');
console.log(_.without);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random=document.querySelector("#random");
let display=document.querySelector("#background");
let interval='';
color1.value="#FF0000";
color2.value="#FFFF00";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function randNum(){
	color1.value='#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value='#'+Math.floor(Math.random()*16777215).toString(16);
	setGradient();  		
}

function randomDisplay() {
	interval =setInterval(() => {
		randNum();
	}, 5000)
 }


setGradient();


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click",randomDisplay);

display.addEventListener("click",function(){
	clearInterval(interval);
});

