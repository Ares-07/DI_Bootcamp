from django.urls import path #path function
from . import views # . is shorthand for the current directory

# one urlpattern per line
urlpatterns = [
    path('/family/<int:x>', views.family_list, name='family_list'),
    path('/animal/<int:x>', views.animal_stats, name='anumal_stats'),
    path('/specific_family/<int:x>', views.family, name='specific_family'),
    path('/animals/', views.animals,name='animals')
]