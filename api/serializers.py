from rest_framework import serializers
from .models import Patient, Result

class ResultSerializer(serializers.HyperlinkedModelSerializer):
    class Meta():
        model = Result
        fields = '__all__'

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta():
        model = Patient
        fields = '__all__'