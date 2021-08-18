from rest_framework import serializers
from .models import *

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=StudentDetails
        fields=('name','registration','father','mother','dob','dept')

class AcademicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=AcademicDetails
        field='__all__'
