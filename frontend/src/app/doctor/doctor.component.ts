import { Component } from '@angular/core';
import { Doctor } from './Doctor-Models/doctor.model';
import { Router } from '@angular/router';
import { DoctorDataService } from './doctor.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  constructor(private router:Router,private doctorService:DoctorDataService,private http:HttpClient){}
 
    doctor:Doctor=new Doctor('','','','','');






    // OnDocSignUp()
    // {
    //   window.alert('Successfully signed up');
    //   console.log('hello there : ',this.doctor);
     
    //   // this.doctorService.SendDocData(this.doctor);
    //   const SerializedDoctor=JSON.stringify(this.doctor);
    //   this.router.navigate(['doctor/dashboard'],{
    //     queryParams:{doctor:SerializedDoctor}
    //   });

    // }

    OnDocSignUp(doctor:Doctor) {
      console.log("doctor signed in");
      console.log("doctor data : ", this.doctor);
    
      this.http.post('http://127.0.0.1:8000/doctors/', this.doctor)
        .subscribe(
          (response) => {
            console.log('doctor data saved:', response);
            this.router.navigate(['doctors/dashboard'], {
              queryParams: { DoctorData: this.doctor }
            });
          },
          (error) => {
            console.error('Error saving doctor data:', error);
          }
        );
    }
     
  }