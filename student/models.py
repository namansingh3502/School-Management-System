from django.db import models
from django.db.models.signals import post_save
from django.dispatch import *

# Create your models here.

student_signal = Signal()

class StudentDetails(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50,null=False,blank=False)
    registration = models.CharField(max_length=10,null=True,blank=False)
    father = models.CharField(max_length=50,default="Lorem Ipsum")
    mother = models.CharField(max_length=50,default="Lorem Ipsum")
    dob = models.DateField(blank=False,null=False)
    dept = models.ForeignKey('class_app.ClassDetail', on_delete=models.CASCADE)

    def __str__(self):
        return self.name + "  ===  " + self.registration

class AcademicDetails(models.Model):

    student = models.OneToOneField(StudentDetails, on_delete=models.CASCADE, editable=False)
    std = models.ForeignKey('class_app.ClassDetail', on_delete=models.CASCADE, editable=False)
    subject1 = models.CharField(max_length=3,default='00',blank=False)
    subject2 = models.CharField(max_length=3,default='00',blank=False)
    subject3 = models.CharField(max_length=3,default='00',blank=False)
    subject4 = models.CharField(max_length=3,default='00',blank=False)
    subject5 = models.CharField(max_length=3,default='00',blank=False)
    subject6 = models.CharField(max_length=3,default='00',blank=False)

    def __str__(self):
        return self.student.name + " " + self.std.name

@receiver(post_save, sender=StudentDetails)
def createStudentProfile(sender,instance,created,**kwargs):
    if created:
        AcademicDetails.objects.create(student=instance,std=instance.dept)
