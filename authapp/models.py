from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
import datetime

class UserProfile(models.Model):
    PREFIX = (
        ('Mr.', 'Mr.'),
        ('Ms.', 'Ms.'),
        ('Mrs.', 'Mrs.'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    prefix = models.CharField(null=True, max_length=4, choices=PREFIX, blank=True)
    name = models.CharField(max_length=50, blank=True, default="Steven Johnson")
    idNumber = models.CharField(max_length=10, blank=True, default="10005")
    joiningDate = models.DateField(null=True, blank=True)
    fathersName = models.CharField(max_length=25, blank=True, default="Steve Jones")
    mothersName = models.CharField(max_length=25, blank=True, default="Naomi Rose")
    phone = models.CharField(max_length=15, blank=True, default="+8898568888418")
    email = models.EmailField(max_length=30, blank=True, default="stevenjohnson@gmail.com" )
    address = models.TextField(max_length=50, blank=True, default="House #10, Road #6, Australia")

    def __str__(self):
        return self.name

class EducationDetails(models.Model):

    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    degree = models.CharField(max_length=10)
    college = models.CharField(max_length=50)

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def createUserProfile(sender,instance,created,**kwargs):
    if created:
        UserProfile.objects.create(user=instance)

