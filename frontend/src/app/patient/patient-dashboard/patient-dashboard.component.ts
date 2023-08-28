import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientDashboard } from './patient-dashboard.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  patientData: PatientDashboard;

  constructor(private http: HttpClient,private route:Router) {}

  ngOnInit(): void {
    this.fetchPatientData();
  }

  fetchPatientData() {
    this.http.get<PatientDashboard>('http://127.0.0.1:8000/patients/1/').subscribe(data => {
      this.patientData = data;
    });
  }

  OnPatientSchedule()
  {
    this.route.navigate(['patients/appointments']);
  }
}
