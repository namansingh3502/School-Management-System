from django.contrib import admin

# Register your models here.

from .models import *

@admin.register(Permission)
class Permission_Admin(admin.ModelAdmin):
    list_display = ('user', 'class_name', 'subject_name')
    list_filter = ('user', 'class_name', 'subject_name')

@admin.register(User_Profile)
class User_Profile_Admin(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name')
