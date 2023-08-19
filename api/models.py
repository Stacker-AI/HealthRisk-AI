from django.db import models

class Patient(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    age = models.IntegerField(default=18)
    weight = models.DecimalField(max_digits=10, decimal_places=2)
    highBP = models.BooleanField()
    highChol = models.BooleanField()
    cholCheck = models.BooleanField()
    smoker = models.BooleanField()
    stroke = models.BooleanField()
    diabetes = models.BooleanField()
    physActivity = models.BooleanField()
    fruit = models.BooleanField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.firstName

class Result(models.Model):
    patientID = models.ForeignKey(Patient, on_delete=models.CASCADE)
    attackRisk = models.BooleanField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.attackRisk