import { Component,OnInit } from '@angular/core';
import { Patient } from './patient.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent  {

  constructor(private router:Router,private routers:ActivatedRoute){}

  patient:Patient=new Patient('','','');

  OnPatientSignUp()
  {
    console.log("patient signed in");
    console.log("patient data : ",this.patient);
    this.router.navigate(['patients/records'],{
      queryParams:{PatientData:this.patient}
    });
  }
  



  


}
