from django.shortcuts import render, redirect, reverse
from django.http import HttpResponse

from django.contrib.auth import authenticate, login, logout

from django.contrib import messages

from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group

# Create your views here.

from .decorators import *
from .form import *
from .models import *

@authenticate_user
def loginPage(request):
    if request.method == 'POST':

        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)

            if user.profile.first_login:
                return redirect( reverse( 'accounts:profile' ))

            group = None
            if user.groups.exists():
                group = user.groups.all()[0].name

                if group == 'teacher':
                    return redirect( reverse( 'teacher:home'))

        messages.info(request, 'Username OR password is incorrect')
        context = {}
        return render(request, 'templates/login_page.html', context)
    else:
        context = { 'form': Login_Form() }
        return render(request, 'templates/login_page.html', context)

def logoutUser(request):
    logout(request)
    return redirect( reverse('accounts:login'))


@login_required(login_url='accounts:signin')
def profile( request ):

    user_profile = request.user.profile
    access = request.user.permission_set.all()
    """print( 'aaaaaaaaaaaaaaa  ', request.user.profile.first_name, request.user.profile.last_name )
       print( 'aaaaaaaaaaaaaaa  ', request.user.permission_set.all()[0].class_name )"""

    context = {
        'user_profile': user_profile,
        'access': access,
    }

    return render(request, 'templates/profile.html', context)
