import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loadedDoctors = [];
  DoctorData = { firstName: '', lastName: '', email: '', specialization: '', availability: false, };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchDoctors();
  }

  onCreateDoctor(DoctorData: {firstName: string; lastName: string; email: string; specialization: string; availability: boolean;}) {
    // Send Http request
  this.http.post('http://127.0.0.1:8000/doctors/',DoctorData)
  .subscribe(responseData=>{console.log(responseData);});
  } 

  onFetchDoctors() {
    this.http.get('http://127.0.0.1:8000/doctors/').subscribe((doctors: any) => {
      this.loadedDoctors = doctors;  // Store the received data in the component variable
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
