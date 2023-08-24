export class Patient{
    public firstName!: string;
    public lastName! : string;
    public email!: string;

    constructor(firstname:string,lastname:string,email:string)
    {
        this.firstName=firstname;
        this.lastName=lastname;
        this.email=email;
    }

   

}
