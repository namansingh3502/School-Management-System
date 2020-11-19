from django.http import HttpResponse
from django.shortcuts import render, redirect

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
                return redirect('profile')

            group = None
            if user.groups.exists():
                group = user.groups.all()[0].name

            if group == 'teacher':
                return redirect('teacher')

        messages.info(request, 'Username OR password is incorrect')
        return HttpResponse("error")
    else:
        context = { 'form': Login_Form() }
        return render(request, 'templates/login_page.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login')

@login_required(login_url='signin')
def profile( request ):

    form_a = Profile_Form()
    form_b = Permission_Form()
    if request.method == 'POST':
        #TODO validate and save user info
        #TODO update first login check
        return HttpResponse('post response profile')

    context = { 'form_a': form_a, 'form_b': form_b }
    return render(request, 'templates/profile.html', context)