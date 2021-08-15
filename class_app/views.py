from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import ClassSchedule
from .models import *

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def schedule(request):

    list = request.user.USER
    serializer = ClassSchedule(list, many=True)

    return Response(serializer.data)
