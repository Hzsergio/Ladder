# Generated by Django 5.0.3 on 2024-03-11 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('divisions', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='division',
            name='publicProfile',
            field=models.ImageField(blank=True, null=True, upload_to='profile_images'),
        ),
    ]
