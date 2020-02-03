
//$('#visited_form').change(function(e) {
//      console.log( $(this));
//      console.log($('#visited'))
//});

//$('.test').change(function(e) {
//	console.log($(this).val())
//});

$('.country_item').change( function(e) {
	console.log("Running");
	$.ajax({
		type:'POST',
		url: '',
		data: {
			visited:$(this).val(),
			csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
			action: 'post'
		},
		success: function(json) {
			console.log("Success");
		},
		error: function(xhr, errmsg, err) {
			console.log(xhr.status + ": " + xhr.responseText);
		}
	});
});

function showCountries(id) {
	var na = document.getElementsByClassName("continent_item")
	for (var i = 0; i < na.length; i++) {
		na[i].style["display"] = "none";
	}
	switch (id) {
		case 1: // North America
//			document.getElementById("1_span").style["visibility"] = "visible";
			var na = document.getElementsByClassName("continent_1")
			for (var i = 0; i < na.length; i++) {
				na[i].style["display"] = "flex";
			}
			break;
		case 2: // South America
			var sa = document.getElementsByClassName("continent_2")
			for (var i = 0; i < sa.length; i++) {
				sa[i].style["display"] = "flex";
			}
			break;
		case 3: // Europe
			var eu = document.getElementsByClassName("continent_3")
			for (var i = 0; i < eu.length; i++) {
				eu[i].style["display"] = "flex";
			}
			break;
		case 4: // Africa
			var af = document.getElementsByClassName("continent_4")
			for (var i = 0; i < af.length; i++) {
				af[i].style["display"] = "flex";
			}
			break;
		case 5: // Asia
			var as = document.getElementsByClassName("continent_5")
			for (var i = 0; i < as.length; i++) {
				as[i].style["display"] = "flex";
			}
			break;
		case 6: // Australia and Oceania
			var au = document.getElementsByClassName("continent_6")
			for (var i = 0; i < au.length; i++) {
				au[i].style["display"] = "flex";
			}
			break;
		case 7: // Antarctica
			var an = document.getElementsByClassName("continent_7")
			for (var i = 0; i < an.length; i++) {
				an[i].style["display"] = "flex";
			}
			break;
		default: // Default to NA
			break;
	}
}