# Generated by Django 3.1.6 on 2023-08-06 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ranking',
            name='is_included',
            field=models.BooleanField(default=True, null=True),
        ),
    ]