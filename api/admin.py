from django.contrib import admin
from .models import Patient, Result

# Register your models here.
@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ['firstName']

@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):
    list_display = ['attackRisk']