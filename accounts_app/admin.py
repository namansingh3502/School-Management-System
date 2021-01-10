from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Permission)
admin.site.register(Profile)
