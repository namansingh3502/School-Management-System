from rest_framework import serializers
from .models import *

class SelfSchedule(serializers.ModelSerializer):

    department = serializers.CharField(source='dept', read_only=True)

    class Meta:
        model = Schedule
        fields = (
            'department',
            'day',
            'slot',
        )

class ClassSchedule(serializers.ModelSerializer):

    user = serializers.CharField(source='user', read_only=True)

    class Meta:
        model = Schedule
        fields = (
            'user',
            'day',
            'slot',
        )
