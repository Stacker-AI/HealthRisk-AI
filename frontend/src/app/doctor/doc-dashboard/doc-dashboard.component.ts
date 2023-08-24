import { Component,OnInit } from '@angular/core';
import { DoctorDataService } from '../doctor.service';
import { Doctor } from '../doctor.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doc-dashboard',
  templateUrl: './doc-dashboard.component.html',
  styleUrls: ['./doc-dashboard.component.css']
})
export class DocDashboardComponent implements OnInit  {

  receiveDoc: Doctor | null=null;

  constructor(public doctorService:DoctorDataService,private route:ActivatedRoute){
    console.log("i am constructor");

  }

  ngOnInit() {
    // console.log("i am ngoninit");
    // this.doctorService.doctor$.subscribe(doctor=>{
    //   this.receiveDoc=doctor;
    //   console.log("Received doctor : ");
      
    // });

    const SerializedDoctor=this.route.snapshot.queryParams['doctor'];
    if(SerializedDoctor){
      this.receiveDoc=JSON.parse(SerializedDoctor);
    }
  }

  

 


}
