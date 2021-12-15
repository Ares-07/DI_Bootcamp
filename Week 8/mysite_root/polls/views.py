from django.shortcuts import render # this line is added automatically
from django.http import HttpResponse # pass view information into the browser

# takes a request, returns a response
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def about(request):
    return HttpResponse("Hello, world. You're at the about index.")

def user(request):
    user = {
        'fname' : "John",
        'lname' : "Snow"
    } 


    context = {
        'user' : user

    }
    return render(request, 'profile_user.html', context)