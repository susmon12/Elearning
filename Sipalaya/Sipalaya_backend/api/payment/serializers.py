from rest_framework import serializers
from .models import *


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = "__all__"

    def validUUid(self, value):
        if Payment.objects.filter(transaction_uuid=value).exists():
            raise serializers.ValidationError("This email address is already in use.")
        return value