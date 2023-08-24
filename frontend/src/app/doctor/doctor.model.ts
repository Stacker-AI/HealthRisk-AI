export class Doctor
{
    public FirstName!: string;
    public LastName! : string;
    public Email!: string;
    public MedicalSpecialization!:string;
    public Availability!:string;
  

    constructor(firstname:string,lastname:string,email:string,spec:string,avail:string)
    {
        this.FirstName=firstname;
        this.LastName=lastname;
        this.Email=email;
        this.MedicalSpecialization=spec;
        this.Availability=avail;
        
    }
    
}