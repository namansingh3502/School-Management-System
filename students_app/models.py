from django.db import models

# Create your models here.

class Profile(models.Model):
    PREFIX = (
        ('Mr.', 'Mr.'),
        ('Ms.', 'Ms.'),
        ('Mrs.', 'Mrs.'),
    )

    prefix = models.CharField(null=True, max_length=4, choices=PREFIX, blank=True )
    first_name = models.CharField(max_length=50 )
    last_name = models.CharField(max_length=50, blank=True )
    phone = models.CharField(max_length=50, blank=True )
    email = models.CharField(max_length=50, blank=True )
    Class = models.ForeignKey( 'class_app.Profile', on_delete=models.CASCADE)

    def __str__(self):
        name = self.Class.name + self.first_name
        return name

class Subject_Score(models.Model):

    student = models.ForeignKey( Profile, on_delete=models.CASCADE )
    subject = models.ForeignKey( 'class_app.Subject', models.CASCADE )

    score = models.CharField( max_length=3, null=True )

    def __str__(self):
        return self.student
