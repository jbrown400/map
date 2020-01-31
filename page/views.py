from django.shortcuts import render
from .models import Continent, Country

# Populate the main page
def index(request):
	continents = Continent.objects.all()
	countries = Country.objects.all()

	context = {
		'continents': continents,
		'countries': countries
	}
	return render(request, 'page/index.html', context)


# Takes a continent and returns all the countries in that continent
def getCountries(continent):
	print(continent)
	return
