import { Component } from '@angular/core';

@Component({
  selector: 'app-mistakes',
  templateUrl: './mistakes.component.html',
  styleUrls: ['./mistakes.component.css']
})
export class MistakesComponent {
  SubmitForm()
  {
    console.log("Sleected option",this.SelectedOption1);
  }
  
  SelectedOption1="";
  SelectedOption2="";
  SelectedOption3="";
  SelectedOption4="";
  SelectedOption5="";
  SelectedOption6="";
  SelectedOption7="";
  SelectedOption8="";
  SelectedOption9="";
  SelectedOption10="";
  SelectedOption11="";
  SelectedOption12="";
  SelectedOption13="";
  SelectedOption14="";
  SelectedOption15="";
  SelectedOption16="";
  SelectedOption17="";
  SelectedOption18="";
  SelectedOption19="";
  SelectedOption20="";
  

  @Output() DocEmit=new EventEmitter<Doctor>();



    OnDocSignUp()
    {
      window.alert('Successfully signed up');
      console.log('hello there : ',this.doctor);
      this.router.navigate(['doctor/dashboard']);
      this.DocEmit.emit(this.doctor);
    }
}
