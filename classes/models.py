from django.db import models
from django.contrib.auth.models import User

from accounts.models import *
from teacher.models import *

# Create your models here.

class Subjects(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Classes(models.Model):
    name = models.CharField( max_length=10 )

    def __str__(self):
        return self.name

class Class_Profile(models.Model):

    name = models.CharField( max_length=10)

    class_teacher = models.ForeignKey( Teacher_Profile, on_delete=models.CASCADE)

    subject_1 = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="subject_1", null=True)
    subject_2 = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="subject_2", null=True)
    subject_3 = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="subject_3", null=True)
    subject_4 = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="subject_4", null=True)

    def __str__(self):
        return self.name