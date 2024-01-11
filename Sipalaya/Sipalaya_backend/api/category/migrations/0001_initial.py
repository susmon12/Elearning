# Generated by Django 5.0 on 2023-12-20 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=50)),
                ('phonr', models.CharField(max_length=10)),
                ('desc', models.TextField(max_length=500)),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
    ]