import { Component,OnInit } from '@angular/core';
import { Patient } from './patient.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

interface PatientData { firstName: string; lastName: string; email: string; }

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent  {

  PatientData: PatientData = { firstName: '', lastName: '', email: '' };
  
  constructor(private http: HttpClient,private router:Router,private routers:ActivatedRoute){}

  OnPatientSignUp(patientData: PatientData)
  {
    this.http.post('http://127.0.0.1:8000/patient', patientData)
    this.router.navigate(['../patientanalysis'],{relativeTo:this.routers});
    
  }
  
  



  


}
