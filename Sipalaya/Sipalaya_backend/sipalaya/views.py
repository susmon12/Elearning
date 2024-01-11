from rest_framework import viewsets
from rest_framework.exceptions import MethodNotAllowed
from .models import Contact, Students
from .serializers import ContactSerializer, StudentsSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

class ContactViewSet(viewsets.ModelViewSet):
    queryset =Contact.objects.all().order_by('first_name')
    serializer_class = ContactSerializer

    @csrf_exempt
    @api_view(['POST'])
    def contact(request):
      if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'success': True, 'message': 'Form submitted successfully'})
        return JsonResponse({'success': False, 'errors': serializer.errors}, status=400)
      
    def list(self, request, *args, **kwargs):
        raise MethodNotAllowed("GET")

    def retrieve(self, request, *args, **kwargs):
        raise MethodNotAllowed("GET")

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        raise MethodNotAllowed("PUT")

    def partial_update(self, request, *args, **kwargs):
        raise MethodNotAllowed("PATCH")

    def destroy(self, request, *args, **kwargs):
        raise MethodNotAllowed("DELETE")



class StudentsViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all().order_by('name')
    serializer_class = StudentsSerializer
    
    def create(self, request, *args, **kwargs):
        raise MethodNotAllowed("POST")

    def update(self, request, *args, **kwargs):
        raise MethodNotAllowed("PUT")

    def partial_update(self, request, *args, **kwargs):
        raise MethodNotAllowed("PATCH")

    def destroy(self, request, *args, **kwargs):
        raise MethodNotAllowed("DELETE")