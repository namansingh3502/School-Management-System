# Generated by Django 3.2.4 on 2021-08-15 17:43

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('class_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='slot',
            field=models.IntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)]),
        ),
    ]