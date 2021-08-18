from django.urls import path
from . import views

urlpatterns = [
    path('<str:className>/<str:studentId>',views.StudentProfile,name="studentProfile"),
    path('<str:className>',views.ClassProfile,name="classProfile"),
]
