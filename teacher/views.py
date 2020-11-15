from django.http import HttpResponse
from django.shortcuts import render, redirect

from django.contrib import messages

from django.contrib.auth.decorators import login_required

"""
from .decorators import *
from .form import *
from .models import * """

@login_required(login_url='signin')
def dashboard( request ):
    return HttpResponse("reached Dashboard")

