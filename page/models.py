from django.db import models


class Country(models.Model):
	# Country name
	name = models.CharField(max_length=30)
	# Boolean for whether or not I've been to that country
	visited = models.BooleanField(default=False)

	def __str__(self):
		return self.name
