from rest_framework import serializers
from .models import *

class ClassSchedule(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = (
            'day',
            'slot',
        )

