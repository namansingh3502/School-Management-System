from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(ClassDetail)
class ClassAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Schedule)
class ClassSchedule(admin.ModelAdmin):
    list_display = ('user', 'day', 'slot')
