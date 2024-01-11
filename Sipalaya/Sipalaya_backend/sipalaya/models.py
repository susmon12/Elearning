from django.db import models
from api.product.models import Courses
# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    phonr = models.CharField(max_length=10)
    desc = models.TextField(max_length=500)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.first_name
    
class Students(models.Model):
    name = models.CharField(max_length=200,blank=True, null=True)
    profile = models.ImageField(upload_to='profile/',blank=True, null=True)
    Course_enroll = models.OneToOneField(Courses,on_delete = models.CASCADE, null=True)
    Company_Logo = models.ImageField(upload_to='company_logo/',blank=True, null=True)
    Company_Name = models.CharField(max_length=200,blank=True,null=True)
    position = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return self.name
    
class Data(models.Model):

    Company_Name = models.CharField(max_length=200,blank=True,null=True)
    position = models.CharField(max_length=200,blank=True,null=True)

    def __str__(self):
        return self.position
