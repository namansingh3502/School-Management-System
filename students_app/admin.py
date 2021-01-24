from django.contrib import admin

# Register your models here.

from .models import *

@admin.register(Student_Profile)
class Student_Profile_Admin(admin.ModelAdmin):
    list_display = ( 'first_name', 'last_name')
    list_filter = ('class_name',)

@admin.register(Subject_Score)
class Subject_Score_Admin(admin.ModelAdmin):
    list_display = ('student', 'subject', 'score')
    list_filter = ('class_name', 'subject')