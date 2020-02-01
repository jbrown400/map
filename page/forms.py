from django import forms

from .models import Country


class VisitedForm(forms.Form):
	visited = forms.MultipleChoiceField(
		choices=((c.pk, c.name) for c in Country.objects.all()),
		label="choices",
		widget=forms.CheckboxSelectMultiple(),
	)
