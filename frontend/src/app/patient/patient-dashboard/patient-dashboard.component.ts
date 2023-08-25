import { Component, OnInit } from '@angular/core';
import { PatientRouteService } from '../patient-services/patientroute.service';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit  {

  constructor(private patroute:PatientRouteService,private http:HttpClient){}

  patients:any[]=[];

// ngOnInit() {
//   // this.patroute.getPatients().subscribe(data=>{
//   //      this.patients=data;
//   //      console.log(this.patients);

//   this.patroute.getPatients();
  
//   }

ngOnInit(){
  this.getPatients();
}

  ComingPatients:Patient;

getPatients() 
{
  this.http.get('http://127.0.0.1:8000/patients/1').subscribe((patient:Patient) => { this.ComingPatients=patient; });
}
  
}

