import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { PatientService } from './patient/patient.service'; 
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {
  constructor(private patientService: PatientService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('CanActivate called');
    let isLoggedIn = this.patientService.isAuthenticated();
    if (isLoggedIn){
      return true
    } else {
      this.router.navigate(['/contact']);
    }
    return true;
  }
  
}
