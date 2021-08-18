from django.contrib import admin
from .models import *


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('department','datetime' )

@admin.register(Notice)
class NoticeAdmin(admin.ModelAdmin):
    list_display = ('department','datetime' )
