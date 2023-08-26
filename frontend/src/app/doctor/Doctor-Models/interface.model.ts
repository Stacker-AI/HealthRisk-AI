import { Time } from "@angular/common";

export interface DoctorInterface {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    specialization:string;
    availability:string;
    time:Time;
  }