from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


# Create your views here.

from .models import *

@login_required(login_url='accounts:login')
def dashboard( request, class_name ):
    current_class = Class.objects.get(name=class_name)
    class_profile = current_class.profile_set.all()[0]
    subjects = class_profile.subject.all()

    context = {
        'profile': class_profile,
        'subjects': subjects,
    }
    return render(request, 'class/dashboard.html', context)