from rest_framework import serializers
from .models import *
from department.serializers import DepartmentDetailsSerializers

class ActivityList(serializers.ModelSerializer):

    department_name = serializers.CharField(source='department', read_only=True)

    class Meta:
        model = Activity
        fields = ('department_name', 'message', 'datetime')


class NoticeList(serializers.ModelSerializer):

    department_name = serializers.CharField(source='department', read_only=True)

    class Meta:
        model = Activity
        fields = ('department_name', 'message', 'datetime')
