import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from '../doctor/doctor.component';
import { PatientComponent } from '../patient/patient.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DocDashboardComponent } from '../doctor/doc-dashboard/doc-dashboard.component';
import { MedicalRecordsComponent } from '../patient/medical-records/medical-records.component';
import { PatientAppointmentsComponent } from '../patient/patient-appointments/patient-appointments.component';
import { DocSchedulesComponent } from '../doctor/doc-schedules/doc-schedules.component';
import { AboutComponent } from '../about/about.component';
import { PatientGuard } from '../patient.guard';
import { AdminComponent } from '../admin/admin.component';
import { PatientanalysisComponent } from '../patientanalysis/patientanalysis.component';
import { PatientDashboardComponent } from '../patient/patient-dashboard/patient-dashboard.component';

const routes:Routes=[
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'admin',component:AdminComponent,canActivate:[PatientGuard]},
{path:'doctor/signup',component:DoctorComponent,canActivate:[PatientGuard]},
{path:'doctors/dashboard',component:DocDashboardComponent},
{path:'patients/signup',component:PatientComponent,canActivate:[PatientGuard]},
{path:'doctors/schedules',component:DocSchedulesComponent},
{path:'patients/faisal',component:MedicalRecordsComponent},
{path:'patients/appointments',component:PatientAppointmentsComponent},
{path:'patients/records',component:PatientanalysisComponent},
{path:'patients/dashboard',component:PatientDashboardComponent}


];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[RouterModule]
})
export class RoutingModule { 
 

    
  

}
