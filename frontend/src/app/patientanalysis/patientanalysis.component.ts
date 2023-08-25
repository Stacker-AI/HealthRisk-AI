import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

interface PatientData { patientID: number,highBP: boolean; highChol: boolean; cholCheck: boolean; bmi: string; smoker: boolean; stroke: boolean; diabetes: string; physActivity: boolean; fruits: boolean; veggies: boolean; hvyAlcoholConsump: boolean; anyHealthcare: boolean; noDocbcCost: boolean; genHlth: string; mentHlth: string; physHlth: string; diffWalk: boolean; sex: boolean; age: string; education: string; income: string; }

@Component({
  selector: 'app-patientanalysis',
  templateUrl: './patientanalysis.component.html',
  styleUrls: ['./patientanalysis.component.css']
})



export class PatientanalysisComponent implements OnInit {

  

  loadedPatients: PatientData[] = [];
  loadedResults: any[] = [];
  PatientData: PatientData = { patientID: 1,  highBP: false, highChol: false, cholCheck: false, bmi: '', smoker: false, stroke: false, diabetes: '', physActivity: false, fruits: false, veggies: false, hvyAlcoholConsump: false, anyHealthcare: false, noDocbcCost: false, genHlth: '', mentHlth: '', physHlth: '', diffWalk: false, sex: false, age: '', education: '', income: '' };

  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit() 
  {
    this.onFetchPatients();
    this.onFetchResults();
  }

  onCreatePatient(patientData: PatientData)
  {
    const booleanFields = ['patientID', 'highBP', 'highChol', 'cholCheck', 'smoker', 'stroke', 'physActivity', 'fruits', 'veggies', 'hvyAlcoholConsump', 'anyHealthcare', 'noDocbcCost', 'diffWalk', 'sex' ];
    booleanFields.forEach(field => { if (patientData[field] === 'true') { patientData[field] = true; } else if (patientData[field] === 'false') { patientData[field] = false; } });
    this.http.post('http://127.0.0.1:8000/patientsdata/',patientData).subscribe((result: PatientData) => { this.loadedPatients.push(result);
    this.onFetchResults();
    this.onFetchPatients();
    this.router.navigate(['patients/dashboard']);
    
  });
  }

  onFetchPatients() 
  {
    this.http.get('http://127.0.0.1:8000/patients/').subscribe((patients: PatientData[]) => { this.loadedPatients = patients; });
  }

  onFetchResults() 
  {
    this.http.get('http://127.0.0.1:8000/results/').subscribe((results: any[]) => { this.loadedResults = results; });
  }

  getPatientDataKeys() 
  {
    return Object.keys(this.PatientData);
  }


}
