from rest_framework import serializers
from .models import DepartmentDetail

class DepartmentDetailsSerializers(serializers.ModelSerializer):
    class Meta:
        model=DepartmentDetail
        fields='__all__'
