import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrls: ['./clientinfo.component.scss']
})
export class ClientinfoComponent implements OnInit{
constructor(private clientsystem:ClientService,private router:Router){}
clientData:any=[];
addclient=new FormGroup({
  id:new FormControl(''),
  name:new FormControl(''),
  address:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl(''),


});
msg:boolean=false;
ngOnInit(): void {
  this.clientsystem.getallclient().subscribe((result:any)=>{
    console.log(result);
    this.clientData=result;

  });
}
savedata(){
  this.clientsystem.saveclientdata(this.addclient.value).subscribe((result)=>{
    //console.log(result);
    this.msg=true;
    this.addclient.reset({});
  });
}
deleteEachClient(id: any) {
  this.clientsystem.deleteEachClient(id).subscribe((result) => {

    this.ngOnInit();
  });
}
removemsg(){
  this.msg=false;
}

}
