
from django.contrib import admin
from django.urls import path, include

admin.site.site_header = "Sipalaya Admin"
admin.site.site_title = "Sipalaya Admin Portal"
admin.site.index_title = "Welcome to Sipalaya Admin Dashboard"

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api',include('api.urls')),
    path('user/', include('account.urls')),
    path('sipalaya/', include('sipalaya.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)