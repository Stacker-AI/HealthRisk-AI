
import { Injectable } from '@angular/core';


 
@Injectable()
export class PatientService
{
   isLoggedIn=false;

   isAuthenticated()
   {
    return this.isLoggedIn;
   }
}