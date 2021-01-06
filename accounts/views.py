from django.shortcuts import render

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from django.contrib.auth.decorators import login_required

from .decorators import *
from .form import *
from .models import *

# Create your views here.

@authenticate_user
def signin(request):
    if request.method == 'POST':

        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)

            if user.profile.first_login:
                return redirect( reverse('accounts:profile'))

            group = None
            if user.groups.exists():
                group = user.groups.all()[0].name

                if group == 'teacher':
                    return redirect( reverse('teacher:dashboard'))

        messages.info(request, 'Username OR password is incorrect')
        return redirect( reverse('teacher:dashboard'))
    else:
        context = { 'form': Login_Form() }
        return render(request, 'templates/login_page.html', context)

def logoutUser(request):
    logout(request)
    return redirect( reverse('accounts:login'))

@login_required(login_url='accounts:login')
def profile( request ):
    if request.user.profile.first_login:
        request.user.profile.first_login = False

    profile_data = request.user.profile
    access = request.user.permission_set.all()

    context = {
        'profile': profile_data,
        'access': access,
        }
    return render(request, 'templates/profile.html', context)