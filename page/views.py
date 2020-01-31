from django.shortcuts import render
from .models import Continent, Country


def index(request):
	continents = Continent.objects.all()
	countries = Country.objects.all()

	context = {
		'continents': continents,
		'countries': countries
	}
	return render(request, 'page/index.html', context)
