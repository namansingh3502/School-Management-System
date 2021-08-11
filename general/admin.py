from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('department','datetime' )

@admin.register(Notice)
class NoticeAdmin(admin.ModelAdmin):
    list_display = ('department','datetime' )
