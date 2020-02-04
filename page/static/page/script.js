
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

// Send turn off LED's or turn them back on
// Also change the button color
$('#power_btn').click(function() {
	var toggle;
	if($(this).hasClass('green')) {
		$(this).removeClass('green');
		$(this).addClass('red');
		toggle = 0;
	}
	else {
		$(this).removeClass('red');
		$(this).addClass('green');
		toggle = 1;
   }

   $.ajax({
		type:'POST',
		url: '',
		data: {
			toggle: toggle,
			csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
			action: 'toggle'
		},
		success: function(json) {
			console.log("Successful toggle");
		},
		error: function(xhr, errmsg, err) {
			console.log(xhr.status + ": " + xhr.responseText);
		}
	});
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
	var items;
	for (var i = 0; i < all.length; i++) {
		all[i].style["display"] = "none";
	}
	switch (id) {
		case 1: // North America
			items = document.getElementsByClassName("continent_1")
			break;
		case 2: // South America
			items = document.getElementsByClassName("continent_2")
			break;
		case 3: // Europe
			items = document.getElementsByClassName("continent_3")
			break;
		case 4: // Africa
			items = document.getElementsByClassName("continent_4")
			break;
		case 5: // Asia
			items = document.getElementsByClassName("continent_5")
			break;
		case 6: // Australia and Oceania
			items = document.getElementsByClassName("continent_6")
			break;
		case 7: // Antarctica
			items = document.getElementsByClassName("continent_7")
			break;
		case 8: // US
			items = document.getElementsByClassName("continent_8")
		default: // Default to NA
			break;
	}
	for (var i = 0; i < items.length; i++) {
		items[i].style["display"] = "flex";
		// Hide the flags the show up for states Georgia and New Mexico
		if (id == 8) {
			items[i].children[0].children[0].style["visibility"] = "hidden";
		}
	}
}