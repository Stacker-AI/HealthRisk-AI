import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient/patient-services/patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private patientserv:PatientService ){
       
  }
 
  ngOnInit() {
    
  }

  Introduction=true;

  DocClicked=false;

OnDoctor()
{
   this.DocClicked=true;
   this.Introduction=false;
  
}


mcqs=[
  {
    question:"What is the mechanism of action of the drug Lisinopril?",
    options:[
      "a) It's an antibiotic targeting bacterial cell walls. ",
      "b) It's an ACE inhibitor used to treat hypertension.",
      "c) It's a beta-blocker used for heart rate control.",
      "d) It's a diuretic promoting water excretion."
    ]
  },

  {
    question:"Which of the following is a symptom of Type 2 diabetes? ",
    options:[
      "a) Insomnia",
      "b) Persistent thirst and hunger",
      "c) Visual hallucinations",
      "d) Joint pain"
    ]
  },
  {
    question:"Which medical imaging technique is commonly used to visualize soft tissues like the brain?",
    options:[
      "a) X-ray ",
      "b) Ultrasound",
      "c) Magnetic Resonance Imaging (MRI)",
      "d) Positron Emission Tomography (PET)"
    ]
  },
  {
    question:"What is the recommended treatment for a patient with a severe allergic reaction (anaphylaxis)?",
    options:[
      "a) Over-the-counter pain relievers",
      "b) Drinking plenty of fluids",
      "c) Administering an epinephrine injection",
      "d) Applying a topical cream"
    ]
  },
  {
    question:"Which of the following conditions is characterized by chronic inflammation of the airways, leading to breathing difficulties?",
    options:[
      "a) Pneumonia",
      "b) Tuberculosis",
      "c) Asthma",
      "d) Osteoarthritis"
    ]
  },
];

CorrectAnswers:string[]=['1','1','2','2','2'];

SelectedOptions:string[]=[];


DocVerified=false;

SubmitForm()
{
  if(this.SelectedOptions.join(',')===this.CorrectAnswers.join(','))
  {
         console.log("u win");
         this.patientserv.isLoggedIn=true;
         this.DocClicked=false;
         this.DocVerified=true;
  }
  else
  {
    console.log("try again");
  }
}


OnDocJoin()
{
  this.router.navigate(['doctor/signup']);
}



// ---------------------------------

PatientClicked=false;

OnPatient()
{
  this.Introduction=false;
  this.PatientClicked=true;
}

OnPatientStarted()
{
  this.router.navigate(['patients/signup']);
  this.patientserv.isLoggedIn=true;
}




}
