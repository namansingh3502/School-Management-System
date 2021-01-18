from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


# Create your views here.

from .models import *

@login_required(login_url='accounts:login')
def dashboard( request, class_name ):

    current_class = Profile.objects.get(name=class_name)
    subjects = current_class.subject.all()
    students = current_class.profile_set.all()

    context = {
        'profile': current_class,
        'subjects': subjects,
        'students': students,
    }
    return render(request, 'class/dashboard.html', context)