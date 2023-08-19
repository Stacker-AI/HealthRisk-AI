from django.urls import path
from django.contrib import admin
from api import views as api_views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'results', api_views.resultViewSet, basename='result')
router.register(r'patients', api_views.patientViewSet, basename='patient')
router.register(r'doctors', api_views.doctorViewSet, basename='doctor')

urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls), 
]