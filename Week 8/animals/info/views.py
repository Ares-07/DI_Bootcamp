from django.shortcuts import render
import json
from .models import Family, Animal

def family(request,x):

	family = Family.objects.filter(id = x).first()

	context = {"family": family}

	return render(request, 'spec_family.html', context)


def family_list(request, x):

	filtered_animals = Animal.objects.filter(family_id = x)
	context = {"family": filtered_animals}
	return render(request, 'family.html', context)


def animal_stats(request, x):

	animal_x = Animal.objects.get(id = x)
	family_name = Family.objects.get(id = animal_x.family_id)		

	context = {"family": family_name, "animal": animal_x}

	return render(request, 'animal.html', context)

def animals(request):
    '''List all animals from db'''
    animal_list = Animal.objects.all()
    return render(request, 'animals.html', {'animal_list':animal_list})