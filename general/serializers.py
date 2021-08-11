from rest_framework import serializers
from .models import *
from department.serializers import DepartmentDetailsSerializers

class ActivityList(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = '__all__'

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['department'] = DepartmentDetailsSerializers(instance.department).data['name']
        return rep

class NoticeList(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['department'] = DepartmentDetailsSerializers(instance.department).data['name']
        return rep
