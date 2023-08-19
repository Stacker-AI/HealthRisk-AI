from .models import Patient, Result, Doctor
from .serializers import PatientSerializer, ResultSerializer, DoctorSerializer
from rest_framework import viewsets, permissions
from .ml_model.app import Prediction

pred = Prediction()

class doctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [permissions.AllowAny]

class patientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request):
        data = request.data
        pred.preprocessing(data)

class resultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    permission_classes = [permissions.AllowAny]



    