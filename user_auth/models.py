from django.db import models

from django.contrib.auth.models import User

from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
CLASS = [
    ('a', 'choice1'),
    ('b', 'choice2'),
    ('c', 'choice3'),
]
SUBJECTS = [
    ('a', 'subjects1'),
    ('b', 'subjects2'),
    ('c', 'subjects3'),
]
PREFIX = [
        ('a', 'Mr.'),
        ('b', 'Ms.'),
        ('c', 'Mrs.'),
    ]
class Employee(models.Model):

    user = models.OneToOneField( User, null = True, blank=True, on_delete = models.CASCADE )
    prefix = models.CharField( null= True, max_length=3, choices=PREFIX )
    first_name = models.CharField( max_length = 30, blank=True)
    last_name = models.CharField( max_length = 30, blank=True)
    first_login = models.BooleanField( max_length = 100, default=True )

    def __str__(self):
        return self.user

class Permissions(models.Model):
    user = models.OneToOneField( User, null = True, blank=True, on_delete = models.CASCADE )
    classes = models.PositiveSmallIntegerField( null = True, choices=CLASS )
    subjects = models.CharField( max_length = 4, choices=SUBJECTS)

    def __str(self):
        return self.user

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Employee.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.employee.save()
