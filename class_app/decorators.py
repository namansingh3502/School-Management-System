from django.db.models.base import ObjectDoesNotExist
from django.shortcuts import redirect
from django.urls import reverse
from django.http import HttpResponse
from accounts_app.models import *
from class_app.models import *

def class_permission_check(view_func):
    def wrapper_func(request, class_name, *args, **kwargs):
        current_class = Class_Profile.objects.get(name=class_name)
        try:
            permission = Permission.objects.get( user=request.user, class_name=current_class)
            return view_func(request, class_name, *args, **kwargs)
        except Permission.DoesNotExist:
            return HttpResponse("Access Denied. You don't have permission for this class.")
    return wrapper_func

def class_subject_permission_check(view_func):
    def wrapper_func(request, class_name, subject_name, *args, **kwargs):
        current_class = Class_Profile.objects.get(name=class_name)
        subject = Subject.objects.get(name=subject_name)
        try:
            permission = Permission.objects.get( user=request.user, class_name=current_class, subject_name=subject)
            return view_func(request, class_name, subject_name, *args, **kwargs)
        except Permission.DoesNotExist:
            return HttpResponse("Access Denied. You don't have permission for this subject.")
    return wrapper_func
