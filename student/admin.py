from django.contrib import admin
from .models import *


@admin.register(StudentDetails)
class StudentDetailsAdmin(admin.ModelAdmin):
    list_display = ('name', 'registration')

@admin.register(AcademicDetails)
class AcademicDetailsAdmin(admin.ModelAdmin):
    list_display = ('student', 'std')

@admin.register(StudentAttendance)
class AttendanceDetailsAdmin(admin.ModelAdmin):
    list_display = ('student',)
