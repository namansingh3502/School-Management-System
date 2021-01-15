from django.shortcuts import render, redirect, reverse
from django.http import HttpResponse

from django.contrib.auth import authenticate, login, logout

from django.contrib import messages

from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group

# Create your views here.

"""
    from .decorators import *
    from .form import *
"""
from .models import *

@login_required(login_url='accounts:login')
def dashboard( request ):

    user_profile = request.user.profile
    access = request.user.permission_set.all()
    """print( 'aaaaaaaaaaaaaaa  ', request.user.profile.first_name, request.user.profile.last_name )
       print( 'aaaaaaaaaaaaaaa  ', request.user.permission_set.all()[0].class_name )"""

    context = {
        'user_profile': user_profile,
        'access': access,
    }

    return render(request, 'teachers/dashboard.html', context)