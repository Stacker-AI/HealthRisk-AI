import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreateDoctor(DoctorData: { name: string; bio: string }) {
    // Send Http request
  this.http.post('https://scrum-day-3-default-rtdb.firebaseio.com/doctor.json',DoctorData)
  .subscribe(responseData=>{console.log(responseData);});
  } 

  onFetchPosts() {
    this.http.get('http://127.0.0.1:8000')
    .subscribe(doctor=>{
      console.log(doctor);
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
