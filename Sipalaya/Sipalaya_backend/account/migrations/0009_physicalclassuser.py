# Generated by Django 5.0 on 2024-01-05 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0008_remove_userinfo_facebook_remove_userinfo_instagram_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PhysicalClassUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('DOB', models.CharField(blank=True, max_length=20, null=True)),
                ('email', models.CharField(blank=True, max_length=100, null=True)),
                ('phone', models.CharField(blank=True, max_length=15, null=True)),
                ('gender', models.CharField(blank=True, max_length=10, null=True)),
                ('collage', models.CharField(blank=True, max_length=255, null=True)),
                ('Academic_status', models.CharField(blank=True, max_length=255, null=True)),
                ('intrested_course', models.CharField(blank=True, max_length=255, null=True)),
                ('preferred_Shedule', models.CharField(blank=True, max_length=20, null=True)),
                ('Intern_ship', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
    ]
