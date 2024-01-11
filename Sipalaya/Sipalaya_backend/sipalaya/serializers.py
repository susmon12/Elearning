from rest_framework import serializers
from .models import *

class  ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Include the course name in the representation
        representation['Course_enroll'] = instance.Course_enroll.name if instance.Course_enroll else None
        return representation