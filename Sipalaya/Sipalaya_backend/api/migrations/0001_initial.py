# Generated by Django 5.0 on 2024-01-04 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=500)),
                ('transaction_code', models.CharField(max_length=500)),
                ('transaction_uuid', models.CharField(max_length=500)),
                ('status', models.CharField(max_length=500)),
            ],
        ),
    ]