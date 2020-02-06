from django.shortcuts import render
from django.http import JsonResponse
from .models import Continent, Country
import RPi.GPIO as GPIO

dataPin = 11
latchPin = 13
clockPin = 15


# Populate the main page
def index(request):
	setup()
	code = ''

	# GET request code
	continents = Continent.objects.all()
	countries = Country.objects.all().order_by('continent__position', 'name')

	if request.method == "POST":
		if request.POST['action'] == "toggle":
			if request.POST['toggle'] == "0":
				single('0')
				return JsonResponse({})
		# print(request.POST.getlist('visited'))
		# Update the entries in the DB
		for s in request.POST.getlist('visited'):
			c = Country.objects.get(name=s)
			c.visited = not c.visited  # Toggle the value that just changed
			c.save()
			# TO DO!!! Figure out how to split this up by continent
			
		# Sum values to be sent to shift registers
		for cou in countries:
                        code += append_val(cou.visited)

		# Send value to shift registers (Can I just import RPi.GPIO in the django project?
		single(code)

		# Just return empty
		response_data = {}
		return JsonResponse(response_data)

	for cou in countries:
		code += append_val(cou.visited)

	single(code)

	context = {
		'continents': continents,
		'countries': countries,
	}
	return render(request, 'page/base.html', context)

def append_val(visited):
	if visited is True:
		return '1'
	else:
		return '0'

def setup():
	GPIO.setmode(GPIO.BOARD)
	GPIO.setup(dataPin, GPIO.OUT)
	GPIO.setup(latchPin, GPIO.OUT)
	GPIO.setup(clockPin, GPIO.OUT)


def single(val):
	# print(val)
	GPIO.output(latchPin, GPIO.LOW)
	shift(val[::-1]) # Reverse the string as I pass it
	GPIO.output(latchPin, GPIO.HIGH)


def shift(val):
	# print('Binary String: ' + val)

	for i in range(0, len(val)):
		print(val[i])
		GPIO.output(clockPin, GPIO.LOW)
		GPIO.output(dataPin, int(val[i]) and GPIO.HIGH or GPIO.LOW)
		GPIO.output(clockPin, GPIO.HIGH)
