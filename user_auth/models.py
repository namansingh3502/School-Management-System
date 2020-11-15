from typing import Dict, Any

from django.db import models
from django.contrib.auth.models import User

from django.db.models.signals import post_save
from django.dispatch import receiver


# Create your models here.

class Profile(models.Model):
    POST = (("principal", "principal"),
            ("teacher", "teacher"),
            ("office staff", "office staff"),
            )

    user = models.OneToOneField( User, null = True, blank=True, on_delete = models.CASCADE )
    name = models.CharField( max_length = 100, blank = True )
    post = models.CharField( max_length = 20, blank = True, choices = POST )
    assigned_class = models.CharField( max_length = 100, blank = True )
    first_login = models.BooleanField( default=True )

    def __str__(self):
        return self.name

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()