import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

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

  SelectedOptions:string[]=[];

  SubmitForm()
  {
    console.log('Selected options: ',this.SelectedOptions);
  }

}
