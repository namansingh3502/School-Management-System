from django.http import HttpResponse
from django.shortcuts import redirect
from django.urls import reverse

def authenticate_user(view_func):
    def wrapper_func(request, *args, **kwargs):
        if request.user.is_authenticated:
            group = None
            if request.user.groups.exists():
                group = request.user.groups.all()[0].name
            if group == 'teacher':
                return redirect( reverse( 'teacher:home' ))
        else:
            return view_func( request, *args, **kwargs )

    return wrapper_func