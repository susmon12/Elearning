# Generated by Django 5.0 on 2023-12-28 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sipalaya', '0004_alter_contact_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company_Name', models.CharField(blank=True, max_length=200, null=True)),
                ('position', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]