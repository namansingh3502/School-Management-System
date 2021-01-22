from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


# Create your views here.

from .models import *

@login_required(login_url='accounts:login')
def dashboard( request, class_name ):

    current_class = Class_Profile.objects.get(name=class_name)
    subjects = current_class.subject.all()
    students = current_class.student_profile_set.all()

    context = {
        'profile': current_class,
        'subjects': subjects,
        'students': students,
    }
    return render(request, 'class/dashboard.html', context)

@login_required(login_url='accounts:login')
def scoresheet( request, class_name ):
    current_class = Class_Profile.objects.get(name=class_name)
    students = current_class.student_profile_set.all()
    scores = current_class.subject_score_set.all()
    subjects = current_class.subject.all()

    context = {
        'profile': current_class,
        'students':  students,
        'subjects': subjects,
        'scores': scores,
    }

    return render(request, 'class/scoresheet.html', context)