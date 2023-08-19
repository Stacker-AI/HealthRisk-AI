from rest_framework import serializers
from .models import Patient, Result, Doctor

class DoctorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta():
        model = Doctor
        fields = '__all__'
        
class ResultSerializer(serializers.HyperlinkedModelSerializer):
    class Meta():
        model = Result
        fields = '__all__'

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta():
        model = Patient
        fields = '__all__'