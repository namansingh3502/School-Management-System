from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import DepartmentDetailsSerializers

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(request):

    departments = request.user.departmentdetail
    serializer = DepartmentDetailsSerializers(departments)

    return Response(serializer.data)
