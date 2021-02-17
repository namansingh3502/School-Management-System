from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib import messages

from django.http import HttpResponse

# Create your views here.

from .models import *
from .decorators import *
from class_app.models import *

@login_required(login_url='accounts:login')
@class_permission_check
def student_profile( request, pk, name):

    profile = Student_Profile.objects.get( pk=pk )
    scores = Subject_Score.objects.filter( student=pk)

    context = {
        'profile': profile,
        'scores': scores,
    }

    return render( request, 'students/profile.html', context )