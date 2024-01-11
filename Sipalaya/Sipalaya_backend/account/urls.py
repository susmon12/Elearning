from django.urls import path, include
from rest_framework.routers import DefaultRouter
from account.views import *
from rest_framework_simplejwt.views import(
    TokenRefreshView,
)
router = DefaultRouter()
router.register(r'registration', PhysicalClassViewSet, basename="registration")
router.register(r'activecourse', CourseDetailsViewSet, basename="activecourse")

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('course/', CourseDetailsView.as_view(), name='course'),
    path('userinfo/', UserInfoView.as_view(), name='update-userinfo'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    # path('registration/', PhysicalClassViewSet.as_view(), name='physical-class-registration'),
    path('', include(router.urls)),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
    

]