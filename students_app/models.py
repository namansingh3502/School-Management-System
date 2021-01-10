from django.db import models

# Create your models here.

class Profile(models.Model):
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
    first_login = models.BooleanField(default=True)

    def __str__(self):
        return self.first_name