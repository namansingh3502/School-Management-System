from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.contrib.auth.models import User

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
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='USER')
    day = models.CharField(null=False, choices=DAYS, blank=False, max_length=10)
    slot = models.IntegerField(validators=[MaxValueValidator(10),MinValueValidator(1)])
    dept = models.ForeignKey('department.DepartmentDetail', on_delete=models.CASCADE, related_name='DEPARTMENT')

    def __str__(self):
        return self.day + " " + str(self.slot) + " " + self.dept.name
