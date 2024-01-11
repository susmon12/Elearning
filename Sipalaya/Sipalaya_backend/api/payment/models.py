from django.db import models

class Payment(models.Model):
    user = models.CharField(max_length=500)
    transaction_code= models.CharField(max_length=500)
    transaction_uuid = models.CharField(max_length=500)
    status = models.CharField(max_length=500)
    def __str__(self):
        return self.user