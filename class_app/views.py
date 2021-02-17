from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib import messages

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
            try:
                new_score = int(request.POST[pk])
            except ValueError:
                check = False

        if check:
            for student in students:
                pk = str( student.pk ) + str( student.first_name )
                new_score = request.POST[pk]
                Subject_Score.objects.filter(
                    student=student,
                    class_name=current_class,
                    subject=current_subject ).update(score=new_score)
            return redirect( 'class_app:scoresheet', class_name=class_name )
        else:
            messages.info(request, 'Invalid user input')

    context = {
        'subject': current_subject,
        'profile': current_class,
        'students': students,
        'scores': scores,
    }

    return render(request, 'class/update_scoresheet.html', context)