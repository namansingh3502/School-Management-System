from django.http import HttpResponse
from django.forms import Login_Form
from django.shortcuts import render, redirect

from django.contrib.auth import authenticate, login
from django.contrib import messages

from django.contrib.auth.decorators import login_required

from school_app.decorators import unauthenticated_user


# Create your views here.
@unauthenticated_user
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.info(request, 'Username OR password is incorrect')
    else:
        context = {'form': Login_Form()}
        return render(request, 'common/login_page', context)


@login_required(login_url='login')
def dashboard(request):
    return HttpResponse("dashboard")
