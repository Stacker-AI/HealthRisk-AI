import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {

  constructor(private router:Router)
  {
     
  }

  ngOnInit() {
    this.StartTimer();
  }

  FakeDocs1:string[]=['Dr.zaid','Dr Mustafa','Dr. Saleem'];

  FakeDocs2:string[]=['Dr Javaid','Dr Junaid','Dr Mutahir','Dr. Chaudary'];

  Doc1Visible=true;

  StartTimer()
  {
    setTimeout(()=>{
      this.Doc1Visible=false;
    },3000);
  }

  Doc2Visible=false;

  OnRefresh()
  {
     this.Doc2Visible=true;
     setTimeout(()=>{
      this.Doc1Visible=true;
    },3000);
    
  }

  getColor()
  {
    return this.Doc1Visible==true ? 'Blue' : 'red';
   
  }

  getColors()
  {
    return this.Doc2Visible==true ? 'Blue' : 'red';
   
  }

  DocName!: string;

  OnDocName()
  {
    console.log(this.DocName);
    this.router.navigate(['doctors/schedules'],{
      queryParams:{docName:this.DocName}
    });
  }
  

}
