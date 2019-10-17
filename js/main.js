"use strict";

const MINGALLONS  =  1;
const MAXGALLONS  =  100;
const MINMILES  =  1;
const MAXMILES  =  1000;
const MINPPG  =  1.00;
const MAXPPG  =  5.00;

var $ = function(id){
	return document.getElementById(id);
};
	var keepGoing	= true;
	var again		= "";
	var firstChar	= "";

var processEntries = function(){
	var miles  				= parseFloat($("miles").value);
	var gallons  				= parseFloat($("gallons").value);
	var price  				= parseFloat($("price").value);
	var validInput      = true;

		if (isNaN(miles)){
			$("miles") .nextElementSibling.firstChid.nodeValue = "Numeric Input Required!";
			validInput = false;
		}

		else if ((miles < MINMILES) || (miles > MAXMILES)){
			$("miles") .nextElementSibling.firstChild.nodeValue = "Mile input out-of-range";
			validInput = false;
		}

		if (isNaN(gallons)){
			$("gallons") .nextElementSibling.firstChid.nodeValue = "Numeric Input Required!";
			validInput = false;
		}

		else if ((gallons < MINGALLONS) || (gallons > MAXGALLONS)){
			$("gallons") .nextElementSibling.firstChid.nodeValue = "Gallon input out-of-range";
			validInput = false;
		}

		if (isNaN(price)){
			$("price") .nextElementSibling.firstChid.nodeValue = "Numeric Input Required!";
			validInput = false;
		}

		else if ((price < MINPPG) || (price > MAXPPG)){
			$("price") .nextElementSibling.firstChid.nodeValue = "Price input out-of-range";
			validInput = false;
		}

		if (validInput){
			calculateMPG(miles, gallons);
		}
};

var calculateMPG = function(m, g){
	var mpg = (miles / gallons);
	$("mpg").value = calculateMPG;
	calculatetripCost(cost);
};

var calculatetripCost = function(g, p) {
	var cost = (gallons * price);
	$("cost") .value = cost;
	calculatecostPerMile(cmile);
};

var calculatecostPerMile = function(c, m){
	var cmile = (cost / miles);
	$("cmile") .value = cmile;
};
function main()
{	
	var keepGoing	= true;
	var again		= "";
	var firstChar	= "";

	while (keepGoing)
	{

		again   = prompt("Run The Program Again? (Y/N)", "Y");
		firstChar = again.charAt(0).toUpperCase();

		if (firstChar === "Y")
		{
			keepGoing = true;
		}
		else
		{
			keepGoing = false;
		}
	}
}

var resetTheForm = function(){
	$("miles") .value 											               ="";
	$("gallons") .value 											             ="";
	$("price") .value 											               ="";
	$("miles") .nextElementSibling.firstChild.nodeValue 	 ="";
	$("gallons") .nextElementSibling.firstChild.nodeValue  ="";
	$("price") .nextElementSibling.firstChild.nodeValue 	 ="";
	$("miles") .focus();
};

window.onload = function() {
	$("calculate") .onclick = processEntries;
	$("reset") .onclick = resetTheForm;
	$("miles") .focus();
};
