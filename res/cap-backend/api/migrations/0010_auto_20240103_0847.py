# Generated by Django 3.1.6 on 2024-01-03 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20230906_2017'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='student_id',
            field=models.IntegerField(unique=True),
        ),
    ]
