from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Student_Profile)
admin.site.register(Subject_Score)