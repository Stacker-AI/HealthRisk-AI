from rest_framework import serializers
from .models import Patient, Result, Doctor, PatientHealthData

class DoctorSerializer(serializers.ModelSerializer):
    class Meta():
        model = Doctor
        fields = '__all__'
        
class ResultSerializer(serializers.ModelSerializer):
    class Meta():
        model = Result
        fields = '__all__'

class PatientSerializer(serializers.ModelSerializer):
    class Meta():
        model = Patient
        fields = '__all__'

class PatientHealthDataSerializer(serializers.ModelSerializer):
    class Meta():
        model = PatientHealthData
        fields = '__all__'
