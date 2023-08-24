export class Patient{
    public FirstName!: string;
    public LastName! : string;
    public Email!: string;

    constructor(firstname:string,lastname:string,email:string)
    {
        this.FirstName=firstname;
        this.LastName=lastname;
        this.Email=email;
    }

   

}
