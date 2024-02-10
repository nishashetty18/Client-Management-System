import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/class/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:string="";
  password:string="";
  message:string="";
  clnt:Client[]=[];
  constructor(private clientsystem:ClientService,private router:Router){
    sessionStorage.clear();
  }

  usercheck()
  {
    if(this.username=="admin"&&this.password=="admin@123"){
      this.router.navigate(['/home']);
    }
    else
    this.clientsystem.getallclient().subscribe((data:any)=>{
      this.clnt=data;
    });
    var uchk=false;
    for(let i=0;i<this.clnt.length;i++)
    {
      if(this.clnt[i].email==this.username&& this.clnt[i].password==this.password)
      {
      sessionStorage.setItem('user',this.clnt[i].name);
      sessionStorage.setItem('id',this.clnt[i].id.toString())
      uchk=true;
      break;
      }   
    }
    if(uchk==true)
    {
      this.router.navigate(['/singleproject']);
    }
    else[]
  
      if(this.username==""||this.password==""){
        this.message="Please enter username/password"
      }
    else{ this.message="Please enter correct username/password"}
    
    
  }
}



