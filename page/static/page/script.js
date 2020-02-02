
// Track current continent selection
var current_continent = 1;

function setContinentsAndCountries(continents, countries) {
	this.continents = continents;
	this.countries = countries;
	console.log("Continents: " + continents);
	console.log("Countries: " + countries);
}

function show() {
	console.log("Continents: " + this.continents);
	console.log("Countries: " + this.countries);
	console.log(current_continent);
}

function showCountries(id) {
	switch (id) {
		case 1: // North America
			document.getElementById("1_span").style["visibility"] = "visible";
			break;
		case 2: // South America
			document.getElementById("2_span").style["visibility"] = "visible";
			break;
		case 3: // Europe
			document.getElementById("3_span").style["visibility"] = "visible";
			break;
		case 4: // Africa
			document.getElementById("4_span").style["visibility"] = "visible";
			break;
		case 5: // Asia
			document.getElementById("5_span").style["visibility"] = "visible";
			break;
		case 6: // Australia and Oceania
			document.getElementById("6_span").style["visibility"] = "visible";
			break;
		case 7: // Antarctica
			document.getElementById("7_span").style["visibility"] = "visible";
			break;
		default: // Default to NA
			break;

	}
	console.log("Clicked: " + id)
}


//$(document).ready(function(){
//    $("#visited_form").on("change", "input:checkbox", function(){
//    	console.log("Submitting form")
//        $("#visited_form").submit();
//    });
//});