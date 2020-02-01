from django.shortcuts import render, get_object_or_404
from .models import Continent, Country
from .forms import VisitedForm


# Populate the main page
def index(request):
	continents = Continent.objects.all()
	countries = Country.objects.all()

	if request.method == "POST":
		print(request.POST.getlist('visited'))

		for s in request.POST.getlist('visited'):
			c = Country.objects.get(name=s)
			c.visited = True
			c.save()

	context = {
		'continents': continents,
		'countries': countries,
	}
	return render(request, 'page/base.html', context)


def visit(request):
	print("testing")

	# country = get_object_or_404(Country, pk=id)

	return render(request, 'page/base.html')


# Takes a continent and returns all the countries in that continent
def getCountries(continent):
	print(continent)
	return
