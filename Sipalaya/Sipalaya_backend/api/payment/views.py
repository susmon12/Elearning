from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import JsonResponse
from .models import Payment
from .serializers import PaymentSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all().order_by('user')
    serializer_class = PaymentSerializer

    @csrf_exempt
    @api_view(['POST'])
    @permission_classes([AllowAny])  # Allow any user to make a POST request, adjust based on your requirements
    def create_payment(request):
        if request.method == 'POST':
            serializer = PaymentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse({'success': True, 'message': 'Form submitted successfully'})
            return JsonResponse({'success': False, 'errors': serializer.errors}, status=400)
