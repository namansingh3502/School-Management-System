from django.http import HttpResponse
from django.shortcuts import render, redirect

from django.contrib.auth import authenticate, login
from django.contrib import messages

from django.contrib.auth.decorators import login_required

from .decorators import *
from .form import *



# Create your views here.
@authenticate_user
def signin(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            messages.info(request, 'Username OR password is incorrect')
    else:
        context = {'form': Login_Form()}
        return render(request, 'templates/login_page.html', context)


@login_required(login_url='login')
def dashboard(request):
    return HttpResponse("dashboard")
