from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class Permission(models.Model):
    user = models.ForeignKey( User, on_delete=models.CASCADE)
    class_name = models.ForeignKey( 'class_app.Profile', on_delete=models.CASCADE)
    subject_name = models.ForeignKey( 'class_app.Subject', on_delete=models.CASCADE)

    def __str__(self):
        name = self.user.username + " " + self.class_name.name + " "
        name += self.subject_name.name
        return name

class Profile(models.Model):
    PREFIX = (
        ('Mr.', 'Mr.'),
        ('Ms.', 'Ms.'),
        ('Mrs.', 'Mrs.'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    prefix = models.CharField(null=True, max_length=4, choices=PREFIX)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, blank=True)
    phone = models.CharField(max_length=50, blank=True)
    email = models.CharField(max_length=50, blank=True)
    first_login = models.BooleanField(default=True)

    def __str__(self):
        name = self.first_name + " " + self.last_name
        return name

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
