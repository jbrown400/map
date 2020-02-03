from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from .models import Continent, Country


# Populate the main page
def index(request):
	continents = Continent.objects.all()
	countries = Country.objects.all().order_by('continent_id', 'name')

	sum = 0

	if request.method == "POST":
		print(request.POST.getlist('visited'))
		# Update the entries in the DB
		for s in request.POST.getlist('visited'):
			c = Country.objects.get(name=s)
			c.visited = not c.visited  # Toggle the value that just changed
			c.save()
			# TO DO!!! Figure out how to split this up by continent
			# Sum values to be sent to shift registers
			sum += pow(2, c.power)

		# Send value to shift registers (Can I just import RPi.GPIO in the django project?

		# Just return empty
		response_data = {}
		return JsonResponse(response_data)

	context = {
		'continents': continents,
		'countries': countries,
	}
	return render(request, 'page/base.html', context)
