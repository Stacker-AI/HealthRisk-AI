import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent {

  constructor(private router:Router){}

  mcqs=[
    {
      question:"have you ever been diagnosed with heart disease or experienced a heart attack?",
      options:[
           "yes",
           "No"
      ]
    },

    {
      question: "Do you currently have high blood pressure or have you been diagnosed with hypertension?",
      options:[
        "yes",
        "No"
      ]
    },

    {
      question: "Have you been diagnosed with high cholesterol levels?",
      options:[
        "yes",
        "No"
      ]
    },

    {
      question:"Have you had a recent cholesterol check to monitor your cholesterol levels?",
      options:[
        "yes",
        "No"
      ]
    },

    {
      question:"Do you know your current BMI, a measure of your body weight in relation to your height?",
      options:[
        "yes",
        "no"
      ]
    },

    {
      question:"Are you a smoker or have you smoked in the past?",
      options:[
        "yes",
        "No"
      ]
    },

    {
      question:"Have you ever experienced a stroke or been diagnosed with a history of strokes?",
      options:[
        "yes",
        "No"
      ]
    },

    {
      question:"Do you have diabetes or have you been diagnosed with high blood sugar levels?",
      options:[
        "yes",
        "No"
      ]
      
    },

    {
      question: "Do you engage in regular physical activity or exercise?",
      options:[
        "yes",
        "No"
      ]
    },

    {
      question :"Do you consume an adequate amount of fruits in your diet?",
      options:[
        "yes",
        "No"
      ]
    }
  ]

  SelectedOptions:string[]=[];

  Diseases:string[]=['HeartDiseaseorAttack','HighBP','HighChol','CholCheck','BMI','Smoker','Stroke','Diabetes','PhysActivity','Fruits'];

  FormView=true;

  RecordShow=false;

  OnRecordSubmit()
  {
      this.FormView=false;
      this.RecordShow=true;
      console.log("Patient sumbitted medical record");
      window.alert('Successfully set up');
  }

  OnHomePage()
  {
    this.router.navigate(['']);
  }

  OnAppointment()
  {
    this.router.navigate(['patients/appointments']);
  }





}
