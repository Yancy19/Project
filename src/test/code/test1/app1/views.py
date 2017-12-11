from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
 
def hello1(request):
    return HttpResponse("Hello world for app1 ! ")