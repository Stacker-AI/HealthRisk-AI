import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Doctor } from "./doctor.model";

@Injectable(
    {
        providedIn:'root'
    }
)

export class DoctorDataService{
    private DoctorSource=new Subject<Doctor>();
    doctor$=this.DoctorSource.asObservable();

    SendDocData(doctor:Doctor)
    {
        this.DoctorSource.next(doctor);
    }
}



