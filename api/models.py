from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Doctor(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    email = models.EmailField()
    specialization = models.CharField(max_length=10)
    availability = models.BooleanField(default=True)

class Patient(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    highBP = models.BooleanField()
    highChol = models.BooleanField()
    cholCheck = models.BooleanField()
    bmi = models.PositiveIntegerField(validators=[MinValueValidator(10), MaxValueValidator(100)])
    smoker = models.BooleanField()
    stroke = models.BooleanField()
    diabetes = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(2)])
    physActivity = models.BooleanField()
    fruits = models.BooleanField()
    veggies = models.BooleanField()
    hvyAlcoholConsump = models.BooleanField()
    anyHealthcare = models.BooleanField()
    noDocbcCost = models.BooleanField()
    genHlth = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    mentHlth = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(30)])
    physHlth = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(30)])
    diffWalk = models.BooleanField()
    sex = models.BooleanField()
    age = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(13)])
    education = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(6)])
    income = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(8)])
    timestamp = models.DateTimeField(auto_now_add=True)

class Result(models.Model):
    patientID = models.ForeignKey(Patient, on_delete=models.CASCADE)
    attackRisk = models.BooleanField()
    timestamp = models.DateTimeField(auto_now_add=True)
