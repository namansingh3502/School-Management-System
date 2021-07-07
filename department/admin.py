from django.contrib import admin

from .models import DepartmentDetail

# Register your models here.

@admin.register(DepartmentDetail)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'head')
