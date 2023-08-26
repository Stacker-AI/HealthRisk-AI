import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';

@Component({
  selector: 'app-doc-schedules',
  templateUrl: './doc-schedules.component.html',
  styleUrls: ['./doc-schedules.component.css']
})
export class DocSchedulesComponent  {

  constructor(private http:HttpClient){}

doctorFreeTime:Time;

  OnDocTimeSubmit()
  {
    console.log("patient signed in");
      console.log("patient data : ", this.doctorFreeTime);
    
      this.http.post('http://127.0.0.1:8000/doctors/time/', this.doctorFreeTime)
        .subscribe(
          (response) => {
            console.log('doctor time saved:', response);
          },
          (error) => {
            console.error('Error saving doctor time:', error);
          }
        );
    }
  
  }
