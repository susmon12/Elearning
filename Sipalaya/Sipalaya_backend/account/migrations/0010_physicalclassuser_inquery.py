# Generated by Django 5.0 on 2024-01-05 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0009_physicalclassuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='physicalclassuser',
            name='inquery',
            field=models.TextField(blank=True, max_length=1000, null=True),
        ),
    ]
