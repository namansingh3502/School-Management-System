# Generated by Django 3.2.4 on 2021-08-15 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('class_app', '0002_alter_schedule_slot'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='day',
            field=models.IntegerField(choices=[(1, 'Monday'), (2, 'Tuesday'), (3, 'Wednesday'), (4, 'Thursday'), (5, 'Friday'), (6, 'Saturday')], max_length=10),
        ),
    ]