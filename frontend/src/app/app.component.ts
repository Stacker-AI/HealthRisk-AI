import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PatientData { firstName: string; lastName: string; highBP: boolean; highChol: boolean; cholCheck: boolean; bmi: string; smoker: boolean; stroke: boolean; diabetes: string; physActivity: boolean; fruits: boolean; veggies: boolean; hvyAlcoholConsump: boolean; anyHealthcare: boolean; noDocbcCost: boolean; genHlth: string; mentHlth: string; physHlth: string; diffWalk: boolean; sex: boolean; age: string; education: string; income: string; }

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit 
{
  loadedPatients: PatientData[] = [];
  loadedResults: any[] = [];
  PatientData: PatientData = { firstName: '', lastName: '', highBP: false, highChol: false, cholCheck: false, bmi: '', smoker: false, stroke: false, diabetes: '', physActivity: false, fruits: false, veggies: false, hvyAlcoholConsump: false, anyHealthcare: false, noDocbcCost: false, genHlth: '', mentHlth: '', physHlth: '', diffWalk: false, sex: false, age: '', education: '', income: '' };

  constructor(private http: HttpClient) {}

  ngOnInit() 
  {
    this.onFetchPatients();
    this.onFetchResults();
  }

  onCreatePatient(patientData: PatientData)
  {
    const booleanFields = [ 'highBP', 'highChol', 'cholCheck', 'smoker', 'stroke', 'physActivity', 'fruits', 'veggies', 'hvyAlcoholConsump', 'anyHealthcare', 'noDocbcCost', 'diffWalk', 'sex' ];
    booleanFields.forEach(field => { if (patientData[field] === 'true') { patientData[field] = true; } else if (patientData[field] === 'false') { patientData[field] = false; } });
    this.http.post('http://127.0.0.1:8000/patients/',patientData).subscribe((result: PatientData) => { this.loadedPatients.push(result);
    this.onFetchResults();
    this.onFetchPatients();
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
