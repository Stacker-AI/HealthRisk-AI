import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Patient } from "../patient.model";

@Injectable({
    providedIn:'root'
  })



export class PatientRouteService{
private ApiUrl='http://127.0.0.1/patients/1';

constructor(private http:HttpClient){}

// getPatients():Observable<any>
// {
// return this.http.get(this.ApiUrl);

// }

ComingPatients:Patient;

getPatients() 
{
  this.http.get('http://127.0.0.1:8000/patients/1').subscribe((patient:Patient) => { patient; });
}

}