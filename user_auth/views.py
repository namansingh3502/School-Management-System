from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from django.contrib.auth.decorators import login_required

from django.forms import formset_factory

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

            if user.employee.first_login:
                return redirect('profile')

            group = None
            if user.groups.exists():
                group = user.groups.all()[0].name

                return redirect(group)

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

    ProfileFormSet = formset_factory( Profile_Form )
    PermissionFromSet = formset_factory( Permission_Form )

    if request.method == 'POST':

        profile_formset = ProfileFormSet(request.POST, request.FILES, prefix='profile')
        permission_formset = PermissionFromSet(request.POST, request.FILES, prefix='permission')

        if profile_formset.is_valid() and permission_formset.is_valid():
               return HttpResponseRedirect( 'teacher:dashboard' )

    context = { 'ProfileFormSet': ProfileFormSet(prefix='profile'),
            'PermissionFromSet': PermissionFromSet(prefix='permission')
                }
    return render(request, 'templates/profile.html', context)