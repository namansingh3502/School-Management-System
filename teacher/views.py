from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.

def dashboard( request ):
    return HttpResponse("Dashboard")