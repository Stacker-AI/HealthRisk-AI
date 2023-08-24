import { Component } from '@angular/core';
import { Doctor } from './doctor.model';
import { Router } from '@angular/router';
import { DoctorDataService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  constructor(private router:Router,private doctorService:DoctorDataService){}
 
    doctor:Doctor=new Doctor('','','','','');






    OnDocSignUp()
    {
      window.alert('Successfully signed up');
      console.log('hello there : ',this.doctor);
     
      // this.doctorService.SendDocData(this.doctor);
      const SerializedDoctor=JSON.stringify(this.doctor);
      this.router.navigate(['doctor/dashboard'],{
        queryParams:{doctor:SerializedDoctor}
      });

    }
     
  }