from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def dashboard( request, class_name ):
    return HttpResponse("class dashboard")