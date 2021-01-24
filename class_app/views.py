from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.db.models.base import ObjectDoesNotExist


# Create your views here.

from .models import *
from students_app.models import *
from .decorators import *

@login_required(login_url='accounts:login')
@permission_check
def dashboard( request, class_name ):

    current_class = Class_Profile.objects.get(name=class_name)
    subjects = current_class.subject.all()
    students = current_class.student_profile_set.all()
    permissions = request.user.permission_set.filter( class_name=current_class )

    context = {
        'profile': current_class,
        'subjects': subjects,
        'students': students,
        'permissions': permissions,
    }
    return render(request, 'class/dashboard.html', context)

@login_required(login_url='accounts:login')
@permission_check
def scoresheet( request, class_name ):

    current_class = Class_Profile.objects.get(name=class_name)
    students = current_class.student_profile_set.all()
    scores = current_class.subject_score_set.all()
    subjects = current_class.subject.all()

    for student in students:
        for subject in subjects:
            sub_score, created = Subject_Score.objects.get_or_create(
                student=student,
                class_name=current_class,
                subject=subject )
            sub_score.save()

    context = {
        'profile': current_class,
        'students':  students,
        'subjects': subjects,
        'scores': scores,
    }

    return render(request, 'class/scoresheet.html', context)

def update_score(request, class_name, subject_name):
    return HttpResponse('update score')