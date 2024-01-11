from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser
from django.core.validators import MaxValueValidator, MinValueValidator
from api.product.models import Courses

#  Custom User Manager
class UserManager(BaseUserManager):
  def create_user(self, email, name,phone, tc, password=None, password2=None):
      """
      Creates and saves a User with the given email, name, tc and password.
      """
      if not email:
          raise ValueError('User must have an email address')

      user = self.model(
          email=self.normalize_email(email),
          name=name,
          phone=phone,
          tc=tc,
      )

      user.set_password(password)
      user.save(using=self._db)
      return user

  def create_superuser(self, email, name,phone, tc, password=None):
      """
      Creates and saves a superuser with the given email, name, tc and password.
      """
      user = self.create_user(
          email,
          password=password,
          name=name,
          phone=phone,
          tc=tc,
      )
      user.is_admin = True
      user.is_superuser = True
      user.save(using=self._db)
      return user


#  Custom User Model
class User(AbstractBaseUser):
  email = models.EmailField(
      verbose_name='Email',
      max_length=255,
      unique=True,
  )
  name = models.CharField(max_length=200)
  tc = models.BooleanField()
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  is_superuser = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  last_login = models.DateTimeField(blank=True, null=True)
  phone = models.IntegerField(        validators=[
            MaxValueValidator(9999999999),
            MinValueValidator(1000000000)
        ],
        default= 1000000000
        )

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'phone' ,'tc']

  def __str__(self):
      return self.email

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_admin

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app `app_label`?"
      # Simplest possible answer: Yes, always
      return True

  @property
  def is_staff(self):
      "Is the user a member of staff?"
      # Simplest possible answer: All admins are staff
      return self.is_admin

class CourseDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    active_course = models.ForeignKey(Courses, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.user.email


# Additional User Details Model
class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    # Add additional fields as needed
    profile = models.ImageField(upload_to='profile/', null=True, blank=True)
    bio = models.TextField(blank=True, null=True,default="")
    address = models.CharField(max_length=255, blank=True, null=True)

    # ... add more fields ...

    def __str__(self):
        
        return self.user.email

class PhysicalClassUser(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    DOB = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)
    collage = models.CharField(max_length=255, blank=True, null=True)
    Academic_status = models.CharField(max_length=255, blank=True, null=True)
    intrested_course = models.CharField(max_length=255, blank=True, null=True)
    preferred_Shedule = models.CharField(max_length=20, blank=True, null=True)
    Intern_ship = models.CharField(max_length=20, blank=True, null=True)
    inquery = models.TextField(max_length=1000, blank=True, null=True)
    
    def __str__(self):    
        return f"{self.name} - {self.email} - {self.phone}"