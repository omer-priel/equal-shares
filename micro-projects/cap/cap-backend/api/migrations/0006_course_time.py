# Generated by Django 3.1.6 on 2023-08-14 07:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20230808_2053'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course_time',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.CharField(choices=[('א', 'א'), ('ב', 'ב'), ('ג', 'ג'), ('ד', 'ד'), ('ה', 'ה'), ('ו', 'ו')], max_length=5, null=True)),
                ('time_start', models.TimeField()),
                ('time_end', models.TimeField()),
                ('class_type', models.CharField(choices=[('המשך', 'המשך'), ('תרגול', 'תרגול')], default='המשך', max_length=5, null=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.course')),
            ],
        ),
    ]
