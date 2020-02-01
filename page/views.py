from django.shortcuts import render, get_object_or_404
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


def visit(request, id):
	country = get_object_or_404(Country, pk=id)

	return


# Takes a continent and returns all the countries in that continent
def getCountries(continent):
	print(continent)
	return
