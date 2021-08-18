# Generated by Django 3.2.4 on 2021-08-18 14:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('class_app', '0004_alter_schedule_day'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='User', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='ClassDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('head', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterField(
            model_name='schedule',
            name='dept',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ClassDetails', to='class_app.classdetail'),
        ),
    ]