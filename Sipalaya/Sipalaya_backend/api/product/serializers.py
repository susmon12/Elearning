# serializers.py
from rest_framework import serializers
from .models import *


class CourseDataSerializer(serializers.ModelSerializer):
    content = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = CourseData
        fields = '__all__'

class SyllabusSerializer(serializers.ModelSerializer):
    course = serializers.StringRelatedField(read_only=True)
    coursedata_set = CourseDataSerializer(many=True, read_only=True)
    class Meta:
        model = Syllabus
        fields = (
            'id',
            'course', 
            'nameof_syllabus1',
            'coursedata_set'
        )

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = ('name', 'field')

class CourseSerializer(serializers.ModelSerializer):
    course = serializers.StringRelatedField(source='name', read_only=True)
    syllabi = SyllabusSerializer(many=True, read_only=True)
    instructor = InstructorSerializer(read_only=True)

    class Meta:
        model = Courses
        fields = (
            'id', 'image', 'course', 'description','whatyouwilllearn', 'price', 'offerPrice', 'instructor', 'syllabi',
        )