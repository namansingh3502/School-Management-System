from django.db.models.base import ObjectDoesNotExist
from django.shortcuts import redirect
from django.urls import reverse
from django.http import HttpResponse
from accounts_app.models import *
from students_app.models import *


def class_permission_check(view_func):
    def wrapper_func(request, pk, name, *args, **kwargs):
        student = Student_Profile.objects.get(pk=pk)
        if student.first_name == name:
            try:
                permission = Permission.objects.get(user=request.user, class_name=student.class_name)
                return view_func(request, pk, name, *args, **kwargs)
            except Permission.DoesNotExist:
                return HttpResponse("Access Denied. You don't have permission for this class.")
        else:
            return HttpResponse("Some error occurred")

    return wrapper_func
