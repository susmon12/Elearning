# Generated by Django 5.0 on 2023-12-30 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0008_courses_whatyouwilllearn'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='description',
            field=models.TextField(max_length=5000),
        ),
        migrations.AlterField(
            model_name='courses',
            name='whatyouwilllearn',
            field=models.TextField(blank=True, max_length=10000, null=True),
        ),
    ]
