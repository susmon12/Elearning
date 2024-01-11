# api/category/views.py

from rest_framework import viewsets
from .models import *
from .serializers import *

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('first_name')
    serializer_class = CategorySerializer
