from rest_framework import serializers
from .models import *

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=StudentDetails
        fields=('name','registration','father','mother','dob','dept')

class AcademicProfileSerializer(serializers.ModelSerializer):

    studentName = serializers.CharField(source='student', read_only=True)

    class Meta:
        model=AcademicDetails
        field=('studentName','subject1','subject2','subject3','subject4','subject5','subject6')
        exclude=('std','id','student')

class StudentAttendanceSerializer(serializers.ModelSerializer):

    studentName = serializers.CharField(source='student', read_only=True)

    class Meta:
        model=StudentAttendance
        field=('studentName','subject1','subject2','subject3','subject4','subject5','subject6')
        exclude=('id','student')
