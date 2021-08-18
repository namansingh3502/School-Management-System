from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.contrib.auth.models import User

class ClassDetail(models.Model):
    head = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Schedule(models.Model):
    DAYS = (
        ('1', 'Monday'),
        ('2', 'Tuesday'),
        ('3', 'Wednesday'),
        ('4', 'Thursday'),
        ('5', 'Friday'),
        ('6', 'Saturday'),
    )

    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='User')
    day = models.CharField(null=False, choices=DAYS, blank=False, max_length=10)
    slot = models.IntegerField(validators=[MaxValueValidator(10),MinValueValidator(1)])
    dept = models.ForeignKey(ClassDetail, on_delete=models.CASCADE, related_name='ClassDetails')

    def __str__(self):
        return self.day + " " + str(self.slot) + " " + self.dept.name
