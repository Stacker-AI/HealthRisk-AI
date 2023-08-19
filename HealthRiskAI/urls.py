from django.urls import path
from django.contrib import admin
from api import views as api_views
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

router = DefaultRouter()
router.register(r'results', api_views.resultViewSet, basename='result')
router.register(r'patients', api_views.patientViewSet, basename='patient')

urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]
