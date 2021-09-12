from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from class_app.models import ClassDetail
from .models import *
from .serializers import *

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def StudentProfile(request,className,studentId):

    class_instance = ClassDetail.objects.get(name=className)
    details = StudentDetails.objects.get(dept=class_instance,name=studentId)
    serializer = StudentProfileSerializer(details)

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ClassProfile(request,className):

    class_instance = ClassDetail.objects.get(name=className)
    details = StudentDetails.objects.filter(dept=class_instance)
    serializers = StudentProfileSerializer(details,many=True)

    return Response(serializers.data)

class StudentAcademic(APIView):

    def get(self,request,className,student_pk,format=None):

        class_instance = ClassDetail.objects.get(name=className)
        details = AcademicDetails.objects.filter(std=class_instance,student=student_pk)
        serializers = AcademicProfileSerializer(details, many=True)

        return Response(serializers.data)

class ClassAcademic(APIView):

    def get(self, request, className, format=None):
        class_instance = ClassDetail.objects.get(name=className)
        details = AcademicDetails.objects.filter(std=class_instance)
        serializers = AcademicProfileSerializer(details, many=True)

        return Response(serializers.data)

class StudentAttendanceView(APIView):

    def get(self, request,studentId,format=None,*args,**kwargs):

        student_instance = StudentDetails.objects.get(name=studentId).studentattendance
        serializers = StudentAttendanceSerializer(student_instance)

        return Response(serializers.data)

class ClassAttendance(APIView):

    def get(self, request, className, format=None):

        class_instance = ClassDetail.objects.get(name=className)
        details = StudentAttendance.objects.filter(std=class_instance)

        serializers = StudentAttendanceSerializer(details,many=True)

        return Response(serializers.data)
