from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(request):

    print( request.user )

    date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    message = 'Current time in server is '
    return Response(data=message + date, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def restricted(request, *args, **kwargs ):
    print( request.user )

    return Response(data="Only for Logged in Users", status=status.HTTP_200_OK)

