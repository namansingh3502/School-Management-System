from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import *
from .models import *

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def self_schedule(request):

    user = request.user
    list = Schedule.objects.filter(user=user)
    serializer = SelfSchedule(list, many=True)

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def class_schedule(request, class_pk ):

    class_pk = ClassDetail.objects.get(id=class_pk)
    list = Schedule.objects.filter(dept=class_pk)
    serializer = ClassSchedule(list, many=True)

    return Response(serializer.data)
