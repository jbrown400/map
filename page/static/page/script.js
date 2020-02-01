
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
			break;
		case 2: // South America
			break;
		case 3: // Europe
			break;
		case 4: // Africa
			break;
		case 5: // Asia
			break;
		case 6: // Australia and Oceania
			break;
		case 7: // Antarctica
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