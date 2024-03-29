from django.contrib import admin

from .models import *

# Register your models here.

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'name')

@admin.register(EducationDetails)
class EducationDetailsAdmin(admin.ModelAdmin):
    list_display = ('user', 'degree')
