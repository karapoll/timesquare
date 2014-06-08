function changeColor() {
	var couleurR = Math.round(255*Math.random());
	var couleurG = Math.round(255*Math.random());
	var couleurB = Math.round(255*Math.random());
	var couleur = "rgb("+couleurR+","+couleurG+","+couleurB+")";
	document.body.style.background = couleur;
}

function horloge(){
	var temps = new Date();
	var heure = temps.getHours();
	if (heure < 10)
		heure = "0"+heure;
	document.getElementById("heure").innerHTML = heure;
	var minute = temps.getMinutes();
	if (minute < 10)
		minute = "0"+minute;
	document.getElementById("minute").innerHTML = minute;
	var seconde = temps.getSeconds();
	if (seconde < 10)
		seconde = "0"+seconde;
	document.getElementById("seconde").innerHTML = seconde;
	if (heure == "11" && minute == "00" && seconde == "00")
		document.body.style.background = "red";
}
setInterval(horloge,1000);

function animationTitle(){
	document.title = "Be there..";
	setTimeout(function(){document.title = "or be square!"},1000);

}
setInterval(animationTitle, 2000);

function animation(positionTop,positionLeft){
	document.getElementById("anime").style.top = positionTop+"px";
	document.getElementById("anime").style.left = positionLeft+"px";
}

function changeColorDiv() {
	var couleurR = Math.round(255*Math.random());
	var couleurG = Math.round(255*Math.random());
	var couleurB = Math.round(255*Math.random());
	var couleur = "rgb("+couleurR+","+couleurG+","+couleurB+")";
	document.getElementById("anime").style.background = couleur;
}

var positionLeft = 0;
var positionTop = 0;
var depW = "right";
var depH = "top";
setInterval(
	function()
	{
		if (positionLeft ==0)
		{
			depW = "right";
			changeColorDiv();
		}
		else if ((positionLeft + document.getElementById("anime").offsetWidth) == document.body.clientWidth)
		{
			depW = "left";
			changeColorDiv();
		}	
		if (positionTop == 0)
		{
			depH = "top";
			changeColorDiv();
		}
		else if ((positionTop + document.getElementById("anime").offsetHeight) == document.body.clientHeight)
		{
			depH = "bottom";
			changeColorDiv();
		}

		animation(positionTop,positionLeft);

		if (depW == "right")
			positionLeft++;
		else if (depW == "left")
			positionLeft--;
		if (depH == "top")
			positionTop++;
		else if (depH == "bottom")
			positionTop--;

	},1)
