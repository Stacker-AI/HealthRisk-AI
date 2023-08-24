import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/patient/patient.model';

@Component({
  selector: 'app-doc-schedules',
  templateUrl: './doc-schedules.component.html',
  styleUrls: ['./doc-schedules.component.css']
})
export class DocSchedulesComponent implements OnInit  {

  receivedDocName!:string;
  ActualDocName!:string;
  ReceivedPatientName : Patient|null=null;

  PatientReceived=false;

  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.receivedDocName=params['docName'];
    })

    const SerializedDoctor=this.route.snapshot.queryParams['doctor'];
    if(SerializedDoctor){
      this.ActualDocName=JSON.parse(SerializedDoctor);
    }

    this.route.queryParams.subscribe(params=>{
        this.ReceivedPatientName=params['PatientData'];
        this.PatientReceived=true;
        console.log("patient data received queryparams: ",this.ReceivedPatientName);
    })
  }

  TodayDate:Date=new Date();
}
