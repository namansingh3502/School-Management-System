from django.urls import path
from . import views

urlpatterns = [
    path(
        'profile/<str:className>/<str:studentId>',
         views.StudentProfile,
         name="studentProfile"
    ),
    path(
        'profile/<str:className>',
        views.ClassProfile,
        name="classProfile"
    ),
    path(
        'score/<str:className>/<str:student_pk>',
        views.StudentAcademic.as_view(),
        name="studentAcademic"
    ),
    path(
        'score/<str:className>',
        views.ClassAcademic.as_view(),
        name="classAcademic"
    ),
    path(
        'attendance/<str:className>/<str:studentId>',
        views.StudentAttendanceView.as_view(),
        name="studentAttendance"
    ),
    path(
        'attendance/<str:className>',
        views.ClassAttendance.as_view(),
        name="classAttendance"
    ),
]
