from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from django.contrib.auth.decorators import login_required

from .decorators import *
#from .form import *
#from .models import *

@login_required(login_url='accounts:login')
@allowed_users(allowed_roles=['teacher'])
def teacher( request, pk ):
    HttpResponse(" teacher dashboa")