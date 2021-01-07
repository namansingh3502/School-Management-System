from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from accounts.models import *

# Create your models here.

class Student(models.Model):
    PREFIX = (
        ('Mr.', 'Mr.'),
        ('Ms.', 'Ms.'),
        ('Mrs.', 'Mrs.'),
    )

    prefix = models.CharField(null=True, max_length=4, choices=PREFIX)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    address = models.CharField(max_length=100)

    Class = models.ForeignKey(Class, on_delete=models.CASCADE)
    subject_1 = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="subject_1", null=True)
    subject_2 = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="subject_2", null=True)
    subject_3 = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="subject_3", null=True)
    subject_4 = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="subject_4", null=True)

    def __str__(self):
        name = self.Class.name + " " + self.first_name + " " + self.last_name
        return name
