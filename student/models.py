from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

from accounts.models import *
from classes.models import *

class Students_Profile(models.Model):
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

    Class = models.ForeignKey(Class_Profile, on_delete=models.CASCADE)

    def __str__(self):
        name = self.Class.name + " " + self.first_name + " " + self.last_name
        return name

class Score_Card(models.Model):

    student = models.OneToOneField( Students_Profile, on_delete=models.CASCADE )

    subject_1 = models.PositiveSmallIntegerField( null=True)
    subject_2 = models.PositiveSmallIntegerField( null=True)
    subject_3 = models.PositiveSmallIntegerField( null=True)
    subject_4 = models.PositiveSmallIntegerField( null=True)

    def __str__(self):
        return self.student

@receiver(post_save, sender=Students_Profile)
def create_student_score_card(sender, instance, created, **kwargs):
    if created:
        Students_Profile.objects.create(student=instance)

@receiver(post_save, sender=Students_Profile)
def save_student_score_card(sender, instance, **kwargs):
    instance.students_profile.save()