from api.category.models import *
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("first_name","last_name","email","phonr","desc","date")
        fields = '__all__'