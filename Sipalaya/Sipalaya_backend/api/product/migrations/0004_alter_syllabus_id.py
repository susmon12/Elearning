# Generated by Django 5.0 on 2023-12-29 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_alter_syllabus_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='syllabus',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
