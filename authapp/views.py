from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import UserProfileSerializer, EducationDetailsSerializer
from rest_framework import status
from .models import *


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def personalDetails(request):

    profile = request.user.userprofile
    serializer = UserProfileSerializer(profile)

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def educationalDetails(request):

    educationDetailsLists = request.user.userprofile

    print(educationDetailsLists)

    #serializer = EducationDetailsSerializer(educationDetailsLists)

    #return Response(serializer.data)
    return Response("Hello")

