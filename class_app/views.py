from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.forms import modelformset_factory

# Create your views here.

from .models import *
from students_app.models import *
from .decorators import *

@login_required(login_url='accounts:login')
@class_permission_check
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
@class_permission_check
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

@login_required(login_url='accounts:login')
@class_subject_permission_check
def update_score(request, class_name, subject_name):

    current_class = Class_Profile.objects.get(name=class_name)
    current_subject = Subject.objects.get(name=subject_name)
    students = current_class.student_profile_set.all()
    scores = current_class.subject_score_set.filter(subject=current_subject)

    if request.method == 'POST':
        check=True

        for student in students:
            pk = str( student.pk ) + str( student.first_name )
            updated_score = int(request.POST[pk])
            if 0 <= updated_score <= 100:
                pass
            else:
                check = False
                messages.info(request, 'Invalid input data')
                break
        if check:
            for student in students:
                pk = str( student.pk ) + str( student.first_name )
                updated_score = request.POST[pk]
                print(updated_score)
                Subject_Score.objects.filter( student=student, class_name=current_class, subject=current_subject ).update(score=updated_score)

    context = {
        'subject': current_subject,
        'profile': current_class,
        'students': students,
        'scores': scores,
    }

    return render(request, 'class/update_scoresheet.html', context)