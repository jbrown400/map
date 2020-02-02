from django.shortcuts import render
from .models import Continent, Country


# Populate the main page
def index(request):
	continents = Continent.objects.all()
	countries = Country.objects.all()

	sum = 0

	if request.method == "POST":
		# Update the entries in the DB
		for s in request.POST.getlist('visited'):
			c = Country.objects.get(name=s)
			c.visited = True
			c.save()
			# TO DO!!! Figure out how to split this up by continent
			# Sum values to be sent to shift registers
			sum += pow(2, c.power)

		# Send value to shift registers (Can I just import RPi.GPIO in the django project?



		# Uncheck any missing values
		for c in countries:
			if c.name not in request.POST.getlist('visited'):
				c.visited = False
				c.save()

	context = {
		'continents': continents,
		'countries': countries,
	}
	return render(request, 'page/base.html', context)
