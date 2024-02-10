import { ThisReceiver } from "@angular/compiler";

export class Client {
    id:string="";
    name:string="";
    address:string="";
    email:string="";
    password:string="";
    constructor(cid:string,cname:string,caddress:string,cemail:string,cpassword:string){
        this.id=cid;
        this.name=cname;
        this.address=caddress;
        this.email=cemail;
        this.password=cpassword;
    }
}
