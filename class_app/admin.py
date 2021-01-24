from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Subject)

@admin.register(Class_Profile)
class Class_Profile_Admin( admin.ModelAdmin ):
    list_display = ('name', 'class_teacher')
