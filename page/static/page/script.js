
//$('#visited_form').change(function(e) {
//      console.log( $(this));
//      console.log($('#visited'))
//});

//$('.test').change(function(e) {
//	console.log($(this).val())
//});


// Update the DB without having to refresh the page
$('.country_input').change( function(e) {
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

$('#power_btn').click(function() {
	if($(this).hasClass('green')) {
		$(this).removeClass('green');
		$(this).addClass('red');
	}
	else {
		$(this).removeClass('red');
		$(this).addClass('green');
   }
})

$('#full_screen_btn').click(function() {
	console.log("Hello?");
	if (document.fullscreenElement) {
		document.exitFullscreen();
        console.log("FS active");// fullscreen is activated
    } else {
		document.documentElement.requestFullscreen();
    	console.log("FS inactive")
        // fullscreen is cancelled
    }
})

function showCountries(id) {
	var all = document.getElementsByClassName("country_item")
	for (var i = 0; i < all.length; i++) {
		all[i].style["display"] = "none";
	}
	switch (id) {
		case 1: // North America
			var na = document.getElementsByClassName("continent_1")
			na.background
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