from django.db import models


class Continent(models.Model):
	# Continent name
	name = models.CharField(max_length=30)
	
	position = models.IntegerField(default=0)

	def __str__(self):
		return self.name


class Country(models.Model):
	# The continent this country belongs to
	continent = models.ForeignKey(Continent, on_delete=models.CASCADE, null=True)
	# Country name
	name = models.CharField(max_length=50)
	# Boolean for whether or not I've been to that country
	visited = models.BooleanField(default=False)
	# Value that will be used when calculating the final number
	# that will be converted to binary and used to illuminate
	# the corresponding LEDs
	power = models.IntegerField(default=0)

	def toggle_visited(self):
		self.visited = (not self.visited)

	def __str__(self):
		return self.name
