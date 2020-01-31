from django.db import models


class Continent(models.Model):
	# Continent name
	name = models.CharField(max_length=15)

	def __str__(self):
		return self.name


class Country(models.Model):
	# The continent this country belongs to
	continent = models.ForeignKey(Continent, on_delete=models.CASCADE, null=True)
	# Country name
	name = models.CharField(max_length=30)
	# Boolean for whether or not I've been to that country
	visited = models.BooleanField(default=False)

	def __str__(self):
		return self.name
