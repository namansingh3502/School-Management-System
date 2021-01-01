from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from django.contrib.auth.decorators import login_required

from django.forms import formset_factory,modelformset_factory

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
                return redirect( reverse ( 'user_auth:profile' ))

            group = None
            if user.groups.exists():
                group = user.groups.all()[0].name

                if group == 'teacher':
                    return redirect( reverse ( 'teacher:dashboard'))

        messages.info(request, 'Username OR password is incorrect')
        return HttpResponse("error here")
    else:
        context = { 'form': Login_Form() }
        return render(request, 'templates/login_page.html', context)

def logoutUser(request):
    logout(request)
    return redirect( reverse('user_auth:login'))

@login_required(login_url='user_auth:signin')
def profile( request ):

    ProfileFormSet = modelformset_factory( Employee, exclude=['user', 'first_login'], extra=0, max_num=1)
    PermissionFromSet = modelformset_factory( Permissions, exclude=['user','classes'] )

    if request.method == 'POST':

        profile_instance = Employee( first_login = True )
        profile_form = ProfileFormSet(request.POST, request.FILES, prefix='profile' )
        permission_form = PermissionFromSet(request.POST, request.FILES, prefix='permission')

        if profile_form.is_valid() and permission_form.is_valid():
            #profile_form.save()

            profile_instances = profile_form.save( commit=False )
            for instance in permission_instances:
                print(instance)
            #profile_instances.save()

            permission_instances = permission_form.save( commit=False )
            for instance in permission_instances:
                print(instance)
            permission_instances.save()

            return redirect(reverse( 'teacher:dashboard' ))

    context = {
            'ProfileFormSet': ProfileFormSet(prefix='profile'),
            'PermissionFromSet': PermissionFromSet(prefix='permission')
            }
    return render(request, 'templates/profile.html', context)