# Generated by Django 5.0 on 2023-12-30 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_remove_coursedata_duration_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='courses',
            name='whatyouwilllearn',
            field=models.CharField(blank=True, max_length=10000, null=True),
        ),
    ]
