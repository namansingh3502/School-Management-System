from django.http import HttpResponse
from django.shortcuts import redirect

def authenticate_user(view_func):
    def wrapper_func(request, *args, **kwargs):
        if request.user.is_authenticated:
            group = None
            if request.user.groups.exists():
                group = request.user.groups.all()[0].name
            if group == 'teacher':
                return redirect('teacher')
            # elif group == 'teacher':
            #   return redirect('teacher')
        else:
            return view_func(request, *args, **kwargs)

    return wrapper_func
