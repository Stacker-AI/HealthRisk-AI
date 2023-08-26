import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DoctorInterface } from '../Doctor-Models/interface.model';

@Component({
  selector: 'app-doc-dashboard',
  templateUrl: './doc-dashboard.component.html',
  styleUrls: ['./doc-dashboard.component.css']
})
export class DocDashboardComponent  {

  constructor(private http: HttpClient,private route:Router) {}

  DoctorData: DoctorInterface;

  ngOnInit(): void {
    this.fetchDoctorData();
  }

  fetchDoctorData() {
    this.http.get<DoctorInterface>('http://127.0.0.1:8000/patients/1/').subscribe(data => {
      this.DoctorData = data;
    });
  }

  OnDocSchedule()
  {
    this.route.navigate(['doctors/schedules']);
  }
  

 


}
