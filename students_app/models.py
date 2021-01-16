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

    def __str__(self):
        return self.first_name