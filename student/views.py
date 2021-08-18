from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from class_app.models import ClassDetail
from .models import *
from .serializers import *

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def StudentProfile(request,className,studentId):

    class_instance = ClassDetail(name=className)

    details=StudentDetails(dept=class_instance,name=studentId)
    serializer=StudentProfileSerializer(details)

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ClassProfile(request,className):

    class_instance = ClassDetail(name=className)

    details=StudentDetails(dept=class_instance)

    print(details)
    #serializers=StudentProfileSerializer(details)

    return Response("serializers.data")
