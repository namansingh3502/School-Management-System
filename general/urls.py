from django.urls import path
from . import views

urlpatterns = [
    path('activity', views.activity, name="activity-list"),
    path('notice', views.notice, name="notice-list"),
]
