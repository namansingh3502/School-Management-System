from django.db import models

# Create your models here.

from department.models import *


class Notice(models.Model):
    department = models.ForeignKey(DepartmentDetail, on_delete=models.CASCADE)
    message = models.CharField(blank=False, null=False, max_length=100)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.department.name


class Activity(models.Model):
    department = models.ForeignKey(DepartmentDetail, on_delete=models.CASCADE, related_name='activity')
    message = models.CharField(blank=False, null=False, max_length=100)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.department.name
