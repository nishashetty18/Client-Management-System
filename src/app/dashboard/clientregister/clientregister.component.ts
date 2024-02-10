import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientregister',
  templateUrl: './clientregister.component.html',
  styleUrls: ['./clientregister.component.scss']
})
export class ClientregisterComponent implements OnInit{
  constructor(private clientsystem:ClientService){}
  addclient=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  
  
  });
  msg:boolean=false;
  ngOnInit(): void {

  }
  
  savedata(){
    this.clientsystem.saveclientdata(this.addclient.value).subscribe((result)=>{
      //console.log(result);
      this.msg=true;
      this.addclient.reset({});
    });
}removemsg(){
  this.msg=false;
}
}
