from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.db.models.base import ObjectDoesNotExist


# Create your views here.

from .models import *
from students_app.models import *

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

    for student in students:
        for subject in subjects:
            try:
                sub_score = scores.get(student=student.pk, subject=subject.pk)
            except Subject_Score.DoesNotExist:
                sub_score = Subject_Score(
                    student=student,
                    class_name=current_class,
                    subject=subject,
                    score=0,
                )
                sub_score.save()

    context = {
        'profile': current_class,
        'students':  students,
        'subjects': subjects,
        'scores': scores,
    }

    return render(request, 'class/scoresheet.html', context)