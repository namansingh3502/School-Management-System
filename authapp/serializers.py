from rest_framework import serializers
from .models import *

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'prefix',
            'name',
            'idNumber',
            'joiningDate',
            'fathersName',
            'mothersName',
            'phone',
            'email',
            'address',
        ]

class EducationDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationDetails
        fields = [
            'degree',
            'college',
        ]
