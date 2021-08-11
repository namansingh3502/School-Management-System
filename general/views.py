from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *

from .models import *

# Create your views here.

@api_view(['GET'])
def activity(request):
    activity_list = Activity.objects.order_by('-datetime')[:10]
    serializer = ActivityList(activity_list, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def notice(request):
    notice_list = Notice.objects.order_by('-datetime')[:10]
    serializers = NoticeList(notice_list, many=True)
    return Response(serializers.data)
