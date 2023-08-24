from .models import Patient, Result, Doctor, PatientHealthData
from .serializers import PatientSerializer, ResultSerializer, DoctorSerializer, PatientHealthDataSerializer
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.reverse import reverse
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

class patientHealthDataViewSet(viewsets.ModelViewSet):
    queryset = PatientHealthData.objects.all()
    serializer_class = PatientHealthDataSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        data = request.data
        patient_instance, created = PatientHealthData.objects.get_or_create(**data)
        predicted_data = pred.main(data)

        result_data = {'patientID': reverse('patient-detail', kwargs={'pk': patient_instance.pk}, request=request),'attackRisk': int(predicted_data)}

        result_serializer = ResultSerializer(data=result_data, context={'request': request})
        
        if result_serializer.is_valid():
            result_serializer.save()
            return Response(result_serializer.data, status=status.HTTP_201_CREATED)
        return Response(result_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class resultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    permission_classes = [permissions.AllowAny]



    