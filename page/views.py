from django.shortcuts import render
from .models import Continent, Country


# Populate the main page
def index(request):
	continents = Continent.objects.all()
	countries = Country.objects.all()

	if request.method == "POST":
		# Update the entries in the DB
		for s in request.POST.getlist('visited'):
			c = Country.objects.get(name=s)
			c.visited = True
			c.save()

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


def visit(request):
	print("testing")

	# country = get_object_or_404(Country, pk=id)

	return render(request, 'page/base.html')


# Takes a continent and returns all the countries in that continent
def getCountries(continent):
	print(continent)
	return
