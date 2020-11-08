from typing import Dict, Any

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
SUBJECTS = { 'a': "sub1", 'b': "sub2",
            'c': "sub3", 'd': "sub4",
            'e': "sub5", 'f': "sub6" }
CLASS = { 'a': "class1", 'b': "class2",
              'c': "class3", 'd': "class4",
              'e': "class5", 'f': "class6" }
POST = ( ( "principal", "principal" ),
         ( "teacher", "teacher" ),
         ( "office staff", "office staff" ),
)

class Profile(models.Model):
    user = models.OneToOneField( User, null = True, on_delete = models.CASCADE )
    name = models.CharField( max_length = 100, blank = True )
    post = models.CharField( max_length = 20, blank = True, choices = POST )
    assigned_class = models.CharField( max_length = 20, blank = True )
