# Generated by Django 3.2.4 on 2021-08-16 15:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('department', '0003_alter_departmentdetail_head'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('registration', models.CharField(max_length=10, null=True)),
                ('father', models.CharField(default='Lorem Ipsum', max_length=50)),
                ('mother', models.CharField(default='Lorem Ipsum', max_length=50)),
                ('dob', models.DateField()),
                ('dept', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='department.departmentdetail')),
            ],
        ),
        migrations.CreateModel(
            name='AcademicDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(max_length=15)),
                ('score', models.CharField(default='00', max_length=3)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='student.studentdetails')),
            ],
        ),
    ]
