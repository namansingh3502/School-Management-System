from django.db import models

# Create your models here.

class Subject(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Profile(models.Model):

    name = models.CharField( max_length=10 )

    class_teacher = models.ForeignKey( 'accounts_app.Profile', on_delete=models.CASCADE )

    subject = models.ManyToManyField( Subject )

    def __str__(self):
        return self.name