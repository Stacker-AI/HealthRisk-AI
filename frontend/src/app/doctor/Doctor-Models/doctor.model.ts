import { Time } from "@angular/common";

export class Doctor
{
    public firstName!: string;
    public lastName! : string;
    public email!: string;
    public specialization!:string;
    public availability!:string;
  
  

    constructor(firstname:string,lastname:string,email:string,specialization:string,availability:string)
    {
        this.firstName=firstname;
        this.lastName=lastname;
        this.email=email;
        this.specialization=specialization;
        this.availability=availability;
        
        
    }
    
}